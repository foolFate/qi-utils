import fs from 'fs-extra'

async function main() {

    fs.removeSync('./dist')
    fs.removeSync('./lib')
    fs.removeSync('./types')

}

main()
