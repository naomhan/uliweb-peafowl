define('jquery', function(){
    return window.jQuery;
});

function get_static_version() {
    var scripts = document.getElementsByTagName('scripts'),
        ver = '';
    for (i = scripts.length - 1; i > -1; i -= 1) {
        ver = script.getAttribute('v');
        if(ver) {
            return ver;
        }
    }
    return ver
}

requirejs.config({
    "baseUrl": "/static/plugins/vendor",
    "paths": {
        "app"      : '../../js/modules',
        "text"     : 'require/text',
        "css"      : 'require/css', 
        "markdown" : 'Markdown.Converter',

        //--------------------------------------
        "scrolling"        : '_mmgrid/scrolling',
        "mmgrid"           : '_mmgrid/mmGrid',
        "mmpaginator"      : '_mmgrid/mmPaginator',
        "mmtreegrid"       : '_mmgrid/mmTreeGrid',
        "select2"          : '_select2/select2',
        "adminLTE"         : "app/adminLTE",
        "bootstrap-dialog" : '_bootstrap3.dialog/bootstrap-dialog.min',
        "popover"          : '_webui_popover/jquery.webui-popover.min',
        "webuploader"      : '_webuploader/webuploader.nolog.min',

        "jqdialog2"        : 'jquery.dialog2/jquery.dialog2',
        "jqdialog2-helper" : "jquery.dialog2/jquery.dialog2.helpers",
        "jqvalidation"     : '_jquery.validation/jquery.validate.min',
        "jqvalidation_zh"  : '_jquery.validation/localization/messages_zh.min',
        "jqtoastr"         : 'jquery.toastr/toastr.min',
        "jqtimepicker"     : '_jquery.timepicker/jquery-ui-timepicker-addon'

    },
    "shim": {
        "mmgrid": {
            deps: ['css!_mmgrid/mmGrid'],
            exports: 'jQuery.fn.mmGrid'},
        "mmpaginator": {
            deps: ['scrolling', 'css!_mmgrid/mmPaginator'],
            exports: 'jQuery.fn.mmPaginator'},
        "mmtreegrid": {
            deps: ["mmgrid", "css!_mmgrid/mmTreeGrid"],
            exports: 'jQuery.fn.mmGrid'},
        "select2": {
            deps: ["css!_select2/select2", "css!_select2/select2-bootstrap3"],
            exports: 'jQuery.fn.select2'
        },
        "jqdialog2": {
            deps: [
                "jquery.dialog2/jquery.controls",
                "css!jquery.dialog2/jquery.dialog2"
            ],
            exports: 'jQuery.fn.dialog2'
        },
        "jqdialog2-helper": {
            deps: ["jqdialog2"],
            exports: 'jQuery.fn.dialog2.helpers'
        },
        "jqtoastr": {
            deps: ["jquery", "css!jquery.toastr/toastr.min"]
        },
        "bootstrap-dialog": {
            deps: ['css!_bootstrap3.dialog/bootstrap-dialog.min']
        },
        "popover":{
            deps: ['css!_webui_popover/jquery.webui-popover.min']
        },
        "webuploader":{
            deps: ['css!_webuploader/webuploader.css']
        },
        "jqtimepicker": {
            deps: [
                "css!_jquery.timepicker/jquery-ui-timepicker-addon",
                "_jquery.timepicker/jquery-ui-sliderAccess"
            ],
            exports: 'jQuery.fn.datetimepicker'
        },
        "bootstrap-filestyle":{
            exports: 'jQuery.fn.filestyle'
        }

    },
    urlArgs: get_static_version()
});
