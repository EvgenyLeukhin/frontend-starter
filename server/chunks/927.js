exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 2923:
/***/ ((module) => {

// Exports
module.exports = {
	"Footer": "Footer_Footer__aU2VN"
};


/***/ }),

/***/ 6806:
/***/ ((module) => {

// Exports
module.exports = {
	"Header": "Header_Header___gYgB"
};


/***/ }),

/***/ 8101:
/***/ ((module) => {

// Exports
module.exports = {
	"SideNav": "SideNav_SideNav__tIevB",
	"Link": "SideNav_Link__cCqXF",
	"Link__isActive": "SideNav_Link__isActive__1aiuV"
};


/***/ }),

/***/ 6927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $_: () => (/* reexport */ Footer_Footer),
  h4: () => (/* reexport */ Header_Header),
  Xg: () => (/* reexport */ PageLayout_PageLayout),
  kw: () => (/* reexport */ SideNav_SideNav)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/layout/Header/Header.module.scss
var Header_module = __webpack_require__(6806);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/layout/Header/Header.tsx


const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: (Header_module_default()).Header,
        children: "Header"
    });
};
/* harmony default export */ const Header_Header = (Header);

// EXTERNAL MODULE: ./src/components/layout/Footer/Footer.module.scss
var Footer_module = __webpack_require__(2923);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/layout/Footer/Footer.tsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: (Footer_module_default()).Footer,
        children: "Footer"
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/conts/navLinks.ts
const navLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Login",
        href: "/login"
    },
    {
        title: "Companies",
        href: "/companies"
    },
    {
        title: "Users",
        href: "/users"
    },
    {
        title: "Test",
        href: "/test"
    }
];
/* harmony default export */ const conts_navLinks = (navLinks);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/layout/SideNav/SideNav.module.scss
var SideNav_module = __webpack_require__(8101);
var SideNav_module_default = /*#__PURE__*/__webpack_require__.n(SideNav_module);
;// CONCATENATED MODULE: ./src/components/layout/SideNav/SideNav.tsx






const SideNav = ()=>{
    const router = (0,router_.useRouter)();
    const { pathname } = router;
    return /*#__PURE__*/ jsx_runtime.jsx("aside", {
        className: (SideNav_module_default()).SideNav,
        children: conts_navLinks.map((link, index)=>{
            const { title, href } = link;
            const isCurrentPath = pathname === href;
            return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                // onClick={onLinkClick}
                href: href,
                className: external_classnames_default()((SideNav_module_default()).Link, {
                    [(SideNav_module_default()).Link__isActive]: isCurrentPath
                }),
                children: title
            }, href + index);
        })
    });
};
/* harmony default export */ const SideNav_SideNav = (SideNav);

;// CONCATENATED MODULE: ./src/components/layout/PageLayout/PageLayout.tsx


const PageLayout = ({ pageName, children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header_Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx(SideNav_SideNav, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: pageName,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer_Footer, {})
        ]
    });
};
/* harmony default export */ const PageLayout_PageLayout = (PageLayout);

;// CONCATENATED MODULE: ./src/components/layout/index.ts







/***/ })

};
;