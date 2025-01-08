/**
 * 事件处理器类型
 */
type EventHandler = Function & {
  _origin: Function; // 用户注册的原始回调函数
  _once?: boolean; // 是否一次性回调
};

/**
 * 简单事件总线封装
 */
export class EventBus {
  event: { [key: string]: Array<EventHandler> } = {};

  /**
   * 绑定事件
   * @param eventName 事件名称
   * @param callback 事件回调函数
   */
  on(eventName: string, callback: EventHandler) {
    callback._origin = callback;
    if (this.event[eventName]) {
      this.event[eventName].push(callback);
    } else {
      this.event[eventName] = [callback];
    }
  }

  /**
   * 绑定事件，触发一次后移除
   */
  once(eventName: string, callback: EventHandler) {
    const newHandler = (...params) => {
      callback(...params);
    };
    newHandler._origin = callback;
    newHandler._once = true;
    if (this.event[eventName]) {
      this.event[eventName].push(newHandler);
    } else {
      this.event[eventName] = [newHandler];
    }
  }

  /**
   * 触发事件
   * @param eventName 事件名称
   * @param params 事件参数
   */
  emit(eventName: string, ...params: any[]) {
    if (this.event[eventName]) {
      const needRemoveHandlers = [];
      this.event[eventName].forEach((callback) => {
        callback(...params);
        if (callback._once) {
          needRemoveHandlers.push(callback);
        }
      });
      // 后续处理
      needRemoveHandlers.forEach((fun) => this.off(eventName, fun));
    }
  }

  /**
   * 解绑事件
   * @param eventName 事件名称
   * @param callback 事件回调（不传则移除所有事件处理器）
   */
  off(eventName: string, callback: EventHandler) {
    if (this.event[eventName]) {
      // 这个事件的所有处理器
      const handlers = this.event[eventName];
      if (callback) {
        let index = handlers.findIndex((f) => f._origin === callback);
        handlers.splice(index, 1);
      } else {
        delete this.event[eventName];
      }
    }
  }
}
