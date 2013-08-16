Ember.TEMPLATES.addhost=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push("<div><p>Add Host</p></div>")}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g,h,i="",j=c.helperMissing,k=this.escapeExpression;return e.buffer.push('<header class="navigation">\n    <nav>\n        '),g={},h={hash:{},contexts:[b],types:["STRING"],hashTypes:g,data:e},e.buffer.push(k((f=c.outlet,f?f.call(b,"menu",h):j.call(b,"outlet","menu",h)))),e.buffer.push('\n    </nav>\n</header>\n\n<div class="content cf" role="main">\n    <div class="content-main cf">\n        '),g={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push("\n    </div>\n</div>\n\n"),g={},h={hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e},e.buffer.push(k((f=c.render,f?f.call(b,"modal",h):j.call(b,"render","modal",h)))),i}),Ember.TEMPLATES.dashboard=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div class="content-wrap">\n    <h1>Dashboard</h1>\n\n    <div class="content-block warning">\n        <span class="warning-icon"></span>\n        <p>Running version '),g={},e.buffer.push(i(c._triageMustache.call(b,"buildVersion",{hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push(' - XAC is still work in progress and under \'rapid\' development - passwords are stored plain in local storage use with caution!</p>\n    </div>\n\n    <div class="dashboard-block">\n        <div class="dashboard-block-content">\n            <h3>Overview</h3>\n            <dl>\n                <dt>Pools:</dt>\n                <dd>'),g={unescaped:"STRING"},f=c._triageMustache.call(b,"pools",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashTypes:g,data:e}),(f||0===f)&&e.buffer.push(f),e.buffer.push("</dd>\n                <dt>Servers:</dt>\n                <dd>"),g={unescaped:"STRING"},f=c._triageMustache.call(b,"servers",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashTypes:g,data:e}),(f||0===f)&&e.buffer.push(f),e.buffer.push('</dd>\n                <dt>VM\'s:</dt>\n                <dd>-</dd>\n                <dt>Shared Repositories:</dt>\n                <dd>-</dd>\n                <dt>Virtual Interfaces:</dt>\n                <dd>-</dd>\n            </dl>\n        </div>\n    </div>\n\n    <div class="dashboard-block">\n        <div class="dashboard-block-content">\n            <h3>Resources</h3>\n            <dl>\n                <dt>vCPUs:</dt>\n                <dd>-</dd>\n                <dt>Memory:</dt>\n                <dd>-</dd>\n            </dl>\n        </div>\n    </div>\n\n\n</div>'),h}),Ember.TEMPLATES.footer=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push(' <div class="footer-content">\n        <p>Xen API Console; Build '),f={},e.buffer.push(h(c._triageMustache.call(b,"buildVersion",{hash:{},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push('  |  <a href="https://github.com/HPieters/xac.js" target="_blank" title="Get the source at github">Get the source at github.</a>  |  <a href="https://github.com/HPieters/xac.js/issues" target="_blank" title="Report a issue">Report a issue</a>  |   <a href="https://github.com/HPieters/xac.js/issues" target="_blank" title="Feature request">Feature request</a></p>\n    </div>'),g}),Ember.TEMPLATES.help=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push("<h2>Help</h2>")}),Ember.TEMPLATES.host=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return b.buffer.push('\n<div class="overview-details">\n    <div class="overview-details-header">\n        <h4>Host Information</h4>\n    </div>\n    <div class="overview-nav">\n\n    </div>\n    <div class="overview-content">\n        <ul>\n            <li>'),d={},b.buffer.push(m(c._triageMustache.call(a,"hostUrl",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</li>\n        </ul>\n    </div>\n</div>\n"),e}function g(a,b){var d,e,f,g,i="";return b.buffer.push("\n            "),f={tagName:"STRING"},g={hash:{tagName:"li"},inverse:n.noop,fn:n.program(4,h,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"host.vm","vm",g):o.call(a,"linkTo","host.vm","vm",g),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n        "),i}function h(a,b){var d,e,f,g,h="";return b.buffer.push("\n                "),f={},g={hash:{},inverse:n.noop,fn:n.program(5,i,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"host.vm","vm",g):o.call(a,"linkTo","host.vm","vm",g),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n            "),h}function i(a,b){var d,e="";return b.buffer.push('<h3 class="overview-item-header">'),d={},b.buffer.push(m(c._triageMustache.call(a,"vm.name",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</h3>"),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var j,k,l="",m=this.escapeExpression,n=this,o=c.helperMissing;return k={},j=c["if"].call(b,"view.stateHost",{hash:{},inverse:n.noop,fn:n.program(1,f,e),contexts:[b],types:["ID"],hashTypes:k,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push('\n\n<div class="overview-list">\n    <div class="overview-header">\n        <h4>VM\'s</h4>\n        <hr />\n    </div>\n    <ul>\n        '),k={},j=c.each.call(b,"vm","in","vms",{hash:{},inverse:n.noop,fn:n.program(3,g,e),contexts:[b,b,b],types:["ID","ID","ID"],hashTypes:k,data:e}),(j||0===j)&&e.buffer.push(j),e.buffer.push("\n    </ul>\n</div>\n\n"),k={},e.buffer.push(m(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:k,data:e}))),l}),Ember.TEMPLATES["host/vm"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return b.buffer.push('\n    <div class="overview-details">\n        <div class="overview-details-header">\n            <h4>VM Information</h4>\n        </div>\n\n        <div class="overview-inner">\n            <dl>\n                <dt>Name:</dt><dd>'),d={},b.buffer.push(i(c._triageMustache.call(a,"name",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</dd>\n                <dt>Description:</dt><dd>"),d={},b.buffer.push(i(c._triageMustache.call(a,"name",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</dd>\n                <dt>UUID:</dt><dd>"),d={},b.buffer.push(i(c._triageMustache.call(a,"uuid",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</dd>\n                <dt>Power State:</dt><dd>"),d={},b.buffer.push(i(c._triageMustache.call(a,"power_state",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</dd>\n            </dl>\n        </div>\n    </div>\n"),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i=this.escapeExpression,j=this;h={},g=c["if"].call(b,"view.stateActive",{hash:{},inverse:j.noop,fn:j.program(1,f,e),contexts:[b],types:["ID"],hashTypes:h,data:e}),g||0===g?e.buffer.push(g):e.buffer.push("")}),Ember.TEMPLATES.menu=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push(' <span class="dashboard"></span> Dashboard')}function g(a,b){b.buffer.push(' <span class="overview"></span> Overview ')}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j,k,l="",m=this,n=c.helperMissing,o=this.escapeExpression;return e.buffer.push("<ul>\n    <hr />\n        <li>"),j={},k={hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["STRING"],hashTypes:j,data:e},h=c.linkTo,i=h?h.call(b,"dashboard",k):n.call(b,"linkTo","dashboard",k),(i||0===i)&&e.buffer.push(i),e.buffer.push("</li>\n        <li>"),j={},k={hash:{},inverse:m.noop,fn:m.program(3,g,e),contexts:[b],types:["STRING"],hashTypes:j,data:e},h=c.linkTo,i=h?h.call(b,"overview",k):n.call(b,"linkTo","overview",k),(i||0===i)&&e.buffer.push(i),e.buffer.push("</li>\n        <li><a "),j={},e.buffer.push(o(c.action.call(b,"addHost",{hash:{},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push('>  <span class="add-host"></span> Add Host </a></li>\n    <hr />\n</ul>\n'),l}),Ember.TEMPLATES["modal/addHost"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("\n    <p>Failed to authenticate with server</p>\n")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i="",j=this,k=this.escapeExpression;return e.buffer.push('<div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h4 class="modal-title">Add Host</h4>\n </div>\n<div class="modal-body">\n\n'),h={},g=c["if"].call(b,"authFailed",{hash:{},inverse:j.noop,fn:j.program(1,f,e),contexts:[b],types:["ID"],hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push('\n\n    <form>\n        <ul class="createServerInput">\n            <li>\n                <label for="hostUrl">Host Address:</label>\n                '),h={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(k(c.view.call(b,"App.HostUrlField",{hash:{viewName:"hostUrl",id:"hostUrl",placeholder:"IP Address",valueBinding:"hostUrl"},contexts:[b],types:["ID"],hashTypes:h,data:e}))),e.buffer.push('\n            </li>\n            <li>\n                <label for="hostName">Host Username:</label>\n                '),h={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(k(c.view.call(b,"App.ValidateTextField",{hash:{viewName:"hostName",id:"hostName",placeholder:"SSH Username",valueBinding:"hostName"},contexts:[b],types:["ID"],hashTypes:h,data:e}))),e.buffer.push('\n            </li>\n            <li>\n                <label for="hostPassword">Host Password:</label>\n                '),h={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(k(c.view.call(b,"App.ValidateTextField",{hash:{viewName:"hostPassword",id:"hostPassword",placeholder:"SSH Password",valueBinding:"hostPassword"},contexts:[b],types:["ID"],hashTypes:h,data:e}))),e.buffer.push('\n            </li>\n        </ul>\n        </div>\n        <div class="modal-footer">\n            <input type="submit" name="submit" id="add-server" value="Add Server" '),h={},e.buffer.push(k(c.action.call(b,"createServer",{hash:{},contexts:[b],types:["ID"],hashTypes:h,data:e}))),e.buffer.push(" />\n    </form>\n</div>"),i}),Ember.TEMPLATES["modal/modal"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g,h,i="",j=c.helperMissing,k=this.escapeExpression;return e.buffer.push('<div class="modal-dialog">\n  <div class="modal-content">\n        '),g={},h={hash:{},contexts:[b],types:["STRING"],hashTypes:g,data:e},e.buffer.push(k((f=c.outlet,f?f.call(b,"modalBody",h):j.call(b,"outlet","modalBody",h)))),e.buffer.push("\n    </div>\n</div>"),i}),Ember.TEMPLATES.notifications=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push('<div class="content-wrap"><div class="content-block">\n    <h1>Notifications</h1>\n\n\n\n</div></div>')}),Ember.TEMPLATES.overview=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n<div class="overview-content">\n    <div class="overview-list">\n        <div class="overview-header">\n            <h4>Pools</h4>\n            <hr />\n        </div>\n        <ul>\n            '),e={},d=c.each.call(a,"pool","in","content",{hash:{},inverse:o.noop,fn:o.program(2,g,b),contexts:[a,a,a],types:["ID","ID","ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n        </ul>\n    </div>\n\n    "),e={},d=c["if"].call(a,"view.stateActive",{hash:{},inverse:o.noop,fn:o.program(6,j,b),contexts:[a],types:["ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n\n    "),e={},b.buffer.push(n(c._triageMustache.call(a,"outlet",{hash:{},contexts:[a],types:["ID"],hashTypes:e,data:b}))),b.buffer.push("\n\n\n</div>\n"),f}function g(a,b){var d,e,f,g,i="";return b.buffer.push("\n                "),f={tagName:"STRING"},g={hash:{tagName:"li"},inverse:o.noop,fn:o.program(3,h,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"view","pool",g):p.call(a,"linkTo","view","pool",g),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n            "),i}function h(a,b){var d,e,f,g,h="";return b.buffer.push("\n                    "),f={},g={hash:{},inverse:o.noop,fn:o.program(4,i,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"view","pool",g):p.call(a,"linkTo","view","pool",g),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n                "),h}function i(a,b){var d,e="";return b.buffer.push('<h3 class="overview-item-header">'),d={},b.buffer.push(n(c._triageMustache.call(a,"pool.poolName",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</h3><p>"),d={},b.buffer.push(n(c._triageMustache.call(a,"pool.serverCount",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</p>"),e}function j(a,b){b.buffer.push('\n    <div class="overview-details">\n        <div class="overview-details-header">\n            <h4>Pool Information</h4>\n        </div>\n    </div>\n    ')}function k(a,b){b.buffer.push('\n    <div class="content-wrap">\n       <div class="content-block warning">\n        <span class="warning-icon"></span>\n        <p>Please add a server before continuing.</p>\n    </div>\n    </div>\n')}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var l,m,n=this.escapeExpression,o=this,p=c.helperMissing;m={},l=c["if"].call(b,"view.hasPools",{hash:{},inverse:o.program(8,k,e),fn:o.program(1,f,e),contexts:[b],types:["ID"],hashTypes:m,data:e}),l||0===l?e.buffer.push(l):e.buffer.push("")}),Ember.TEMPLATES["overview/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push('<div class="overview-list">\n        <div class="overview-header">\n            <h4>Hosts</h4>\n        </div>\n        <ul>\n                <li class="active"><h3 class="overview-item-header"></h3></li>\n         </ul>\n    </div>')}),Ember.TEMPLATES["overview/view"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i="";return b.buffer.push("\n            "),f={tagName:"STRING"},h={hash:{tagName:"li"},inverse:m.noop,fn:m.program(2,g,b),contexts:[a],types:["STRING"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"vm.index",h):n.call(a,"linkTo","vm.index",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n        "),i}function g(a,b){var d,e,f,g,i="";return b.buffer.push("\n                "),f={},g={hash:{},inverse:m.noop,fn:m.program(3,h,b),contexts:[a],types:["STRING"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"vm.index",g):n.call(a,"linkTo","vm.index",g),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n            "),i}function h(a,b){var d,e="";return b.buffer.push('\n                    <h3 class="overview-item-header"> '),d={},b.buffer.push(l(c._triageMustache.call(a,"server.hostUrl",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</h3>\n                "),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<div class="overview-list">\n    <div class="overview-header">\n        <h4>Hosts 2</h4>\n    </div>\n    <ul>\n        '),j={},i=c.each.call(b,"server","in","servers",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n\n    </ul>\n</div>\n\n    "),j={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:j,data:e}))),k}),Ember.TEMPLATES["partials/reveal"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push('<div id="reveal-main" class="reveal-modal">\n  <div class="reveal-content">\n    '),f={},e.buffer.push(h(c._triageMustache.call(b,"content",{hash:{},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push('\n  </div>\n  <a class="close-reveal-modal">&#215;</a>\n</div>\n'),g}),Ember.TEMPLATES["pools/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push("test")}),Ember.TEMPLATES.servers=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n<div class="overview-content">\n    <div class="overview-list">\n        <div class="overview-header">\n            <h4>Servers</h4>\n        </div>\n        <ul>\n            '),e={},d=c.each.call(a,"server","in","controller",{hash:{},inverse:n.noop,fn:n.program(2,g,b),contexts:[a,a,a],types:["ID","ID","ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n\n\n        </ul>\n    </div>\n\n    "),e={},b.buffer.push(m(c._triageMustache.call(a,"outlet",{hash:{},contexts:[a],types:["ID"],hashTypes:e,data:b}))),b.buffer.push("\n</div>\n"),f}function g(a,b){var d,e,f,g,i="";return b.buffer.push("\n                "),f={tagName:"STRING"},g={hash:{tagName:"li"},inverse:n.noop,fn:n.program(3,h,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"view.index","server",g):o.call(a,"linkTo","view.index","server",g),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n            "),i}function h(a,b){var d,e,f,g,h="";return b.buffer.push(" "),f={},g={hash:{},inverse:n.noop,fn:n.program(4,i,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"view.index","server",g):o.call(a,"linkTo","view.index","server",g),(e||0===e)&&b.buffer.push(e),h}function i(a,b){var d,e="";return b.buffer.push('<h3 class="overview-item-header">'),d={},b.buffer.push(m(c._triageMustache.call(a,"server.hostUrl",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</h3>"),e}function j(a,b){b.buffer.push('\n    <div class="content-wrap">\n       <div class="content-block warning">\n        <span class="warning-icon"></span>\n        <p>Please add a server before continuing.</p>\n    </div>\n    </div>\n')}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var k,l,m=this.escapeExpression,n=this,o=c.helperMissing;l={},k=c["if"].call(b,"view.hasHosts",{hash:{},inverse:n.program(6,j,e),fn:n.program(1,f,e),contexts:[b],types:["ID"],hashTypes:l,data:e}),k||0===k?e.buffer.push(k):e.buffer.push("")}),Ember.TEMPLATES["servers/index"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i="";return b.buffer.push("\n    <li>"),f={},b.buffer.push(k(c._triageMustache.call(a,"server.hostUrl",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push(" - "),f={},h={hash:{},inverse:l.noop,fn:l.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"servers.edit","server",h):m.call(a,"linkTo","servers.edit","server",h),(e||0===e)&&b.buffer.push(e),b.buffer.push(" - <button "),f={},b.buffer.push(k(c.action.call(a,"deleteServer","server",{hash:{},contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b}))),b.buffer.push(">delete</button> - ("),f={},b.buffer.push(k(c._triageMustache.call(a,"server.versionMayor",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push("."),f={},b.buffer.push(k(c._triageMustache.call(a,"server.versionMinor",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push(") "),f={},b.buffer.push(k(c._triageMustache.call(a,"server.version",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push("</li>\n    "),i}function g(a,b){b.buffer.push("edit")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j="",k=this.escapeExpression,l=this,m=c.helperMissing;return e.buffer.push("<!--<ul>\n    "),i={},h=c.each.call(b,"server","in","controller",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</ul>-->\n\n"),j}),Ember.TEMPLATES["servers/new"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("\n    <p>Failed to authenticate with server</p>\n")}function g(a,b){b.buffer.push(" Cancel ")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j,k,l="",m=this,n=this.escapeExpression,o=c.helperMissing;return j={},h=c["if"].call(b,"authFailed",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n\n    <form>\n        <fieldset>\n            <ul class="createServerInput">\n                <li>\n                    <label for="hostUrl">Host Address:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.HostUrlField",{hash:{viewName:"hostUrl",id:"hostUrl",placeholder:"IP Address",valueBinding:"hostUrl"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push('\n                </li>\n                <li>\n                    <label for="hostName">Host Username:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.ValidateTextField",{hash:{viewName:"hostName",id:"hostName",placeholder:"SSH Username",valueBinding:"hostName"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push('\n                </li>\n                <li>\n                    <label for="hostPassword">Host Password:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.ValidateTextField",{hash:{viewName:"hostPassword",id:"hostPassword",placeholder:"SSH Password",valueBinding:"hostPassword"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push("\n                </li>\n                <li>\n                    <!--"),j={"class":"STRING"},k={hash:{"class":"cancel"},inverse:m.noop,fn:m.program(3,g,e),contexts:[b],types:["STRING"],hashTypes:j,data:e},h=c.linkTo,i=h?h.call(b,"servers.index",k):o.call(b,"linkTo","servers.index",k),(i||0===i)&&e.buffer.push(i),e.buffer.push('-->\n                    <input type="submit" name="submit" id="add-server" value="Add Server" '),j={},e.buffer.push(n(c.action.call(b,"createServer",{hash:{},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push(" />\n                </li>\n            </ul>\n        </fieldset>\n    </form>\n"),l}),Ember.TEMPLATES.settings=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push('<div class="content-block">\n    <h2>Settings</h2>\n</div>')}),Ember.TEMPLATES.view=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i="";return b.buffer.push("\n            "),f={tagName:"STRING"},h={hash:{tagName:"li"},inverse:q.noop,fn:q.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"host","server",h):r.call(a,"linkTo","host","server",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n        "),i}function g(a,b){var d,e,f,g,i="";return b.buffer.push("\n                "),f={},g={hash:{},inverse:q.noop,fn:q.program(3,h,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"host","server",g):r.call(a,"linkTo","host","server",g),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n            "),i}function h(a,b){var d,e="";return b.buffer.push('\n                    <h3 class="overview-item-header"> '),d={},b.buffer.push(p(c._triageMustache.call(a,"server.hostUrl",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</h3>\n                "),e}function i(a,b){var d,e,f,g,h="";return b.buffer.push('\n<div class="overview-list">\n    <div class="overview-header">\n        <h4>VM\'s</h4>\n        <hr />\n    </div>\n    <ul>\n        '),f={contentBinding:"ID"},g={hash:{contentBinding:"servers"},inverse:q.noop,fn:q.program(6,j,b),contexts:[],types:[],hashTypes:f,data:b},d=c.collection,e=d?d.call(a,g):r.call(a,"collection",g),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n    </ul>\n</div>\n\n"),h}function j(a,b){var d,e,f="";return b.buffer.push("\n            "),e={},d=c.each.call(a,"vm","in","view.content.vms",{hash:{},inverse:q.noop,fn:q.program(7,k,b),contexts:[a,a,a],types:["ID","ID","ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n\n        "),f}function k(a,b){var d,e,f,g,h="";return b.buffer.push("\n                "),f={tagName:"STRING"},g={hash:{tagName:"li"},inverse:q.noop,fn:q.program(8,l,b),contexts:[a,a],types:["STRING","ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"host.vm","vm",g):r.call(a,"linkTo","host.vm","vm",g),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n            "),h}function l(a,b){var d,e="";return b.buffer.push('\n                     <h3 class="overview-item-header inactive">'),d={},b.buffer.push(p(c._triageMustache.call(a,"vm.name",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</h3>\n                "),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var m,n,o="",p=this.escapeExpression,q=this,r=c.helperMissing;return e.buffer.push('<div class="overview-list">\n    <div class="overview-header">\n        <h4>Hosts</h4>\n        <hr />\n    </div>\n    <ul>\n        '),n={},m=c.each.call(b,"server","in","servers",{hash:{},inverse:q.noop,fn:q.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashTypes:n,data:e}),(m||0===m)&&e.buffer.push(m),e.buffer.push("\n\n    </ul>\n</div>\n\n"),n={},m=c["if"].call(b,"view.poolActive",{hash:{},inverse:q.noop,fn:q.program(5,i,e),contexts:[b],types:["ID"],hashTypes:n,data:e}),(m||0===m)&&e.buffer.push(m),e.buffer.push("\n\n"),n={},e.buffer.push(p(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:n,data:e}))),o}),Ember.TEMPLATES["view/host"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push('<div class="overview-list">\n    <div class="overview-header">\n        <h4>VM\'s</h4>\n    </div>\n    <ul>\n    </ul>\n</div>\n\n'),f={},e.buffer.push(h(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:f,data:e}))),g}),Ember.TEMPLATES["view/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f="";return f}),Ember.TEMPLATES["view/new"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("\n    <p>Failed to authenticate with server</p>\n")}function g(a,b){b.buffer.push(" Cancel ")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j,k,l="",m=this,n=this.escapeExpression,o=c.helperMissing;return j={},h=c["if"].call(b,"authFailed",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashTypes:j,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n\n    <form>\n        <fieldset>\n            <ul class="createServerInput">\n                <li>\n                    <label for="hostUrl">Host Address:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.HostUrlField",{hash:{viewName:"hostUrl",id:"hostUrl",placeholder:"IP Address",valueBinding:"hostUrl"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push('\n                </li>\n                <li>\n                    <label for="hostName">Host Username:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.ValidateTextField",{hash:{viewName:"hostName",id:"hostName",placeholder:"SSH Username",valueBinding:"hostName"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push('\n                </li>\n                <li>\n                    <label for="hostPassword">Host Password:</label>\n                    '),j={viewName:"STRING",id:"STRING",placeholder:"STRING",valueBinding:"STRING"},e.buffer.push(n(c.view.call(b,"App.ValidateTextField",{hash:{viewName:"hostPassword",id:"hostPassword",placeholder:"SSH Password",valueBinding:"hostPassword"},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push("\n                </li>\n                <li>\n                    <!--"),j={"class":"STRING"},k={hash:{"class":"cancel"},inverse:m.noop,fn:m.program(3,g,e),contexts:[b],types:["STRING"],hashTypes:j,data:e},h=c.linkTo,i=h?h.call(b,"servers.index",k):o.call(b,"linkTo","servers.index",k),(i||0===i)&&e.buffer.push(i),e.buffer.push('-->\n                    <input type="submit" name="submit" id="add-server" value="Add Server" '),j={},e.buffer.push(n(c.action.call(b,"createServer",{hash:{},contexts:[b],types:["ID"],hashTypes:j,data:e}))),e.buffer.push(" />\n                </li>\n            </ul>\n        </fieldset>\n    </form>\n"),l}),Ember.TEMPLATES.vm=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push("Test")}),Ember.TEMPLATES["vm/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{},e.buffer.push("Test")});