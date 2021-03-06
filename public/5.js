(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "representativesForm",
  props: ['data', 'errors'],
  data: function data() {
    return {
      dataResponse: this.data || {
        user: {}
      },
      permission: checkPermission('representatives-edit'),
      errorData: {
        user: {}
      },
      profiles: []
    };
  },
  watch: {
    dataResponse: function dataResponse(val) {
      this.$emit('update', val);
    },
    errors: function errors(val) {
      this.errorData = val;
      this.isFieldValid;
    }
  },
  mounted: function mounted() {
    this.getProfiles();
  },
  methods: {
    save: function save($event) {
      if ($event.target.checkValidity() === false) {
        $event.preventDefault();
        $event.stopPropagation();
      }

      $event.target.classList.add('was-validated');
    },
    isFieldValid: function isFieldValid(field) {
      return Object.keys(this.errorData).includes(field) ? 'is-invalid' : '';
    },
    getProfiles: function getProfiles() {
      var _this = this;

      axios.get('/api/v1/profiles?pagination=false').then(function (response) {
        _this.profiles = response.data.data;
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=template&id=935290c8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=template&id=935290c8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.permission
      ? _c(
          "form",
          {
            staticClass: "needs-validation",
            attrs: { novalidate: "" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "col-md-6 mb-3" }, [
                _c("label", { attrs: { for: "name" } }, [_vm._v("Nome")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.dataResponse.name,
                      expression: "dataResponse.name"
                    }
                  ],
                  class: ["form-control", _vm.isFieldValid("name")],
                  attrs: {
                    type: "text",
                    id: "name",
                    placeholder: "Digite o nome",
                    required: ""
                  },
                  domProps: { value: _vm.dataResponse.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.dataResponse, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.errorData.name) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 mb-3" }, [
                _c("label", { attrs: { for: "name" } }, [_vm._v("E-mail")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.dataResponse.email,
                      expression: "dataResponse.email"
                    }
                  ],
                  class: ["form-control", _vm.isFieldValid("email")],
                  attrs: {
                    type: "email",
                    id: "email",
                    placeholder: "Digite o e-mail",
                    required: ""
                  },
                  domProps: { value: _vm.dataResponse.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.dataResponse, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.errorData.email) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6 mb-3" },
                [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("CNPJ")]),
                  _vm._v(" "),
                  _c("the-mask", {
                    class: ["form-control", _vm.isFieldValid("cnpj")],
                    attrs: {
                      mask: ["##.###.###/####-##"],
                      type: "text",
                      id: "cnpj",
                      placeholder: "Digite o CNPJ",
                      required: ""
                    },
                    model: {
                      value: _vm.dataResponse.cnpj,
                      callback: function($$v) {
                        _vm.$set(_vm.dataResponse, "cnpj", $$v)
                      },
                      expression: "dataResponse.cnpj"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.errorData.cnpj) +
                        "\n                    "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6 mb-3" },
                [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Telefone")]),
                  _vm._v(" "),
                  _c("the-mask", {
                    class: ["form-control", _vm.isFieldValid("phone")],
                    attrs: {
                      mask: ["(##) #####-####"],
                      type: "text",
                      id: "phone",
                      placeholder: "Digite o telefone",
                      required: "",
                      required: ""
                    },
                    model: {
                      value: _vm.dataResponse.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.dataResponse, "phone", $$v)
                      },
                      expression: "dataResponse.phone"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.errorData.phone) +
                        "\n                    "
                    )
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "col-md-6 mb-3" }, [
                _c("label", { attrs: { for: "name" } }, [_vm._v("UserName")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.dataResponse.user.username,
                      expression: "dataResponse.user.username"
                    }
                  ],
                  class: ["form-control", _vm.isFieldValid("user.username")],
                  attrs: {
                    type: "text",
                    id: "username",
                    placeholder: "Digite o username",
                    required: ""
                  },
                  domProps: { value: _vm.dataResponse.user.username },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.dataResponse.user,
                        "username",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.errorData.user.username) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 mb-3" }, [
                _c("label", { attrs: { for: "name" } }, [_vm._v("Senha")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.dataResponse.user.password,
                      expression: "dataResponse.user.password"
                    }
                  ],
                  class: ["form-control", _vm.isFieldValid("password")],
                  attrs: {
                    type: "password",
                    id: "password",
                    placeholder: "Digite a senha",
                    required: ""
                  },
                  domProps: { value: _vm.dataResponse.user.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.dataResponse.user,
                        "password",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.errorData.user.password) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 mb-3" }, [
                _c("label", { attrs: { for: "profile_id" } }, [
                  _vm._v("Perfil")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.dataResponse.user.profile_id,
                        expression: "dataResponse.user.profile_id"
                      }
                    ],
                    class: ["form-control", _vm.isFieldValid("profile_id")],
                    attrs: { id: "profile_id", required: "" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.dataResponse.user,
                          "profile_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "null" } }, [
                      _vm._v("Selecione")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.profiles, function(item) {
                      return _c(
                        "option",
                        { key: item.id, domProps: { value: item.id } },
                        [_vm._v(_vm._s(item.name))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.errorData.user.profile_id) +
                      "\n                    "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._t("buttons")
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    !_vm.permission && _vm.dataResponse
      ? _c("div", [
          _c("p", [
            _c("b", [_vm._v("Nome")]),
            _vm._v(": " + _vm._s(_vm.data.name))
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-danger",
              on: {
                click: function($event) {
                  return _vm.$router.push("/representatives")
                }
              }
            },
            [_vm._v("Voltar")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Representatives/RepresentativesForm.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/Representatives/RepresentativesForm.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RepresentativesForm_vue_vue_type_template_id_935290c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RepresentativesForm.vue?vue&type=template&id=935290c8&scoped=true& */ "./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=template&id=935290c8&scoped=true&");
/* harmony import */ var _RepresentativesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RepresentativesForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RepresentativesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RepresentativesForm_vue_vue_type_template_id_935290c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RepresentativesForm_vue_vue_type_template_id_935290c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "935290c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Representatives/RepresentativesForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RepresentativesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RepresentativesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RepresentativesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=template&id=935290c8&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=template&id=935290c8&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepresentativesForm_vue_vue_type_template_id_935290c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RepresentativesForm.vue?vue&type=template&id=935290c8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Representatives/RepresentativesForm.vue?vue&type=template&id=935290c8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepresentativesForm_vue_vue_type_template_id_935290c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RepresentativesForm_vue_vue_type_template_id_935290c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);