#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var http = require('http');
var xkcd = require('xkcd');
var os = require('os').type();
var exec = require('child_process').exec;

var DEFAULT = 'latest';
var OPENERS = {
	'Linux':'xdg-open',
	'Darwin':'open',
	'Windows_NT':'start'
};

var input = process.argv;
var commands = input.length > 2 ? input.splice(2) : [DEFAULT];

if(commands[0] === 'latest' || isPositiveInteger(commands[0])) {
	var issue = commands[0] === 'latest' ? undefined : parseInt(commands[0]);
	console.log('Loading comic...')
	xkcd(issue, function(data){
		if(data && data.img){
			for(var key in data) {
				console.log(key + ':\t\t' + data[key]);
			}
			open(data.img);
		} else {
			console.log('Received invalid data from server.');
		}
	});
} else {
	fs.readFile(path.join(__dirname, 'help.txt'),function(err, data){
		console.log(data.toString());
	});
}

function open(file) {
	if(OPENERS[os]){
		try {
			exec(OPENERS[os] + ' ' + escape(file));
		} catch (e) {
			console.log('Error opening file.');
		}
	} else {
		console.log('Unable to open files on your platform.');
	}
}

function isPositiveInteger(n) {
    return 0 === n % (!isNaN(parseFloat(n)) && 0 <= ~~n);
}

function escape(s) {
  return s.replace(/"/g, '\\\"');
}