vue init webpack myapp 
//windows下执行vue.cmd --->node_modules/bin/vue 文件

  #!/usr/bin/env node
  require('commander')
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('init', 'generate a new project from a template')
  .command('list', 'list available official templates')
  .parse(process.argv)

  .parse 来分析输入的参数argv;
  并执行commander原型上的executeSubComand
  Command.prototype.executeSubCommand = function{
    spawn(process.execPath, args, { stdio: 'inherit'});
  }

  spawn('node所在路径'，['vue-init','webpack','myapp']);//相当命令行中直接敲入node vue-init webpack myapp

  vue-init 中分析参数(比如所使用的模板参数webpack)
  //地址如下(vue-list 命令获得模板名称)
  //vuejs-templates/webpack   ---->   https://github.com/vuejs-templates/webpack
  //vuejs-templates/webpack-simple   ---->   https://github.com/vuejs-templates/webpack-simple 
  //vuejs-templates/simple   ---->   https://github.com/vuejs-templates/simple
  //vuejs-templates/browserify   ---->   https://github.com/vuejs-templates/browserify
  //vuejs-templates/browserify-simple   ---->   https://github.com/vuejs-templates/browserify-simple

  vue-init文件中去download vuejs-templates/webpack 模板
  
  download 使用了'download-git-repo'模块快
  download = require('download-git-repo')

  download 流程

  function downloadAndGenerate (template) {
    var tmp = os.tmpdir() + '/vue-template-' + uid()
    var spinner = ora('downloading template')
    spinner.start()
    console.log("template----------",template);
    download(template, tmp, { clone: clone }, function (err) {
      spinner.stop()
      process.on('exit', function () {
        rm(tmp)
      })
      if (err) logger.fatal('Failed to download repo ' + template + ': ' + err.message.trim())
      generate(name, tmp, to, function (err) {
        if (err) logger.fatal(err)
        console.log()
        logger.success('Generated "%s".', name)
      })
    })
  }

  生成项目目录完成

直接执行vue-init webpack myapp 会比vue init webpack myapp 更简单（多了commander 的分析）

