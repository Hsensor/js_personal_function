var fs = require("fs");
var path = require("path");


function depthRecursionDir(dir){
	var result = {
		name:dir
	}
	var stats = fs.statSync(dir);
	if(stats.isDirectory()){
		var subDirs = fs.readdirSync(dir);
		result.children = [];

		for(var i=0;i<subDirs.length;i++){
			var subDir = subDirs[i];

			var subDirFullPath = dir+path.sep+subDir;
			console.log(subDirFullPath);
			result.children.push(traversingDir(subDirFullPath));
		}
	}
	return result;
}
var ret = traversingDir("./../");
console.log(ret);

function breadthRecursionDir(dir){
	var result = {
		name:dir
	};
	var stats = fs.statSync(dir);
	if(stats.isDirectory()){
		var subDirs = fs.readdirSync(dir);
		result.children = [];
		for(var i=0;i<subDirs.length;i++){
			var subStats = fs.statSync(dir+path.sep+subDirs[i]);
			if(subStats.isDirectory{
				result.children.push({name:subDirs[i],children:[]});
			}else{
				result.children.push({name:subDirs[i]});
			}
		}
	}

	for(var i=0;i<result.children.length;i++){
		if(result.children[i].children){
			breadthRecursionDir(dir+path.sep+result.children[i].name);
		}
	}
	return result;
}