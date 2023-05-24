function z() {
}
function se(e) {
  return e();
}
function ge() {
  return /* @__PURE__ */ Object.create(null);
}
function K(e) {
  e.forEach(se);
}
function re(e) {
  return typeof e == "function";
}
function Be(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Ie(e) {
  return Object.keys(e).length === 0;
}
const Ue = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in Ue;
function f(e, t) {
  e.appendChild(t);
}
function S(e, t, l) {
  e.insertBefore(t, l || null);
}
function C(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function X(e, t) {
  for (let l = 0; l < e.length; l += 1)
    e[l] && e[l].d(t);
}
function h(e) {
  return document.createElement(e);
}
function A(e) {
  return document.createTextNode(e);
}
function b() {
  return A(" ");
}
function V(e, t, l, n) {
  return e.addEventListener(t, l, n), () => e.removeEventListener(t, l, n);
}
function p(e, t, l) {
  l == null ? e.removeAttribute(t) : e.getAttribute(t) !== l && e.setAttribute(t, l);
}
function Pe(e) {
  return Array.from(e.childNodes);
}
function G(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function ve(e, t) {
  e.value = t ?? "";
}
function te(e, t, l) {
  for (let n = 0; n < e.options.length; n += 1) {
    const c = e.options[n];
    if (c.__value === t) {
      c.selected = !0;
      return;
    }
  }
  (!l || t !== void 0) && (e.selectedIndex = -1);
}
function be(e) {
  const t = e.querySelector(":checked");
  return t && t.__value;
}
function xe(e) {
  const t = {};
  for (const l of e)
    t[l.name] = l.value;
  return t;
}
let fe;
function Y(e) {
  fe = e;
}
const x = [], ye = [];
let D = [];
const ke = [], ze = /* @__PURE__ */ Promise.resolve();
let ce = !1;
function De() {
  ce || (ce = !0, ze.then(Oe));
}
function Z(e) {
  D.push(e);
}
const ie = /* @__PURE__ */ new Set();
let P = 0;
function Oe() {
  if (P !== 0)
    return;
  const e = fe;
  do {
    try {
      for (; P < x.length; ) {
        const t = x[P];
        P++, Y(t), Ke(t.$$);
      }
    } catch (t) {
      throw x.length = 0, P = 0, t;
    }
    for (Y(null), x.length = 0, P = 0; ye.length; )
      ye.pop()();
    for (let t = 0; t < D.length; t += 1) {
      const l = D[t];
      ie.has(l) || (ie.add(l), l());
    }
    D.length = 0;
  } while (x.length);
  for (; ke.length; )
    ke.pop()();
  ce = !1, ie.clear(), Y(e);
}
function Ke(e) {
  if (e.fragment !== null) {
    e.update(), K(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Z);
  }
}
function Qe(e) {
  const t = [], l = [];
  D.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : l.push(n)), l.forEach((n) => n()), D = t;
}
const Re = /* @__PURE__ */ new Set();
function Ve(e, t) {
  e && e.i && (Re.delete(e), e.i(t));
}
const Xe = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...Xe];
function Ye(e, t, l, n) {
  const { fragment: c, after_update: o } = e.$$;
  c && c.m(t, l), n || Z(() => {
    const a = e.$$.on_mount.map(se).filter(re);
    e.$$.on_destroy ? e.$$.on_destroy.push(...a) : K(a), e.$$.on_mount = [];
  }), o.forEach(Z);
}
function Ze(e, t) {
  const l = e.$$;
  l.fragment !== null && (Qe(l.after_update), K(l.on_destroy), l.fragment && l.fragment.d(t), l.on_destroy = l.fragment = null, l.ctx = []);
}
function Ge(e, t) {
  e.$$.dirty[0] === -1 && (x.push(e), De(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Je(e, t, l, n, c, o, a, u = [-1]) {
  const _ = fe;
  Y(e);
  const g = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: z,
    not_equal: c,
    bound: ge(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (_ ? _.$$.context : [])),
    // everything else
    callbacks: ge(),
    dirty: u,
    skip_bound: !1,
    root: t.target || _.$$.root
  };
  a && a(g.root);
  let E = !1;
  if (g.ctx = l ? l(e, t.props || {}, (m, s, ...v) => {
    const d = v.length ? v[0] : s;
    return g.ctx && c(g.ctx[m], g.ctx[m] = d) && (!g.skip_bound && g.bound[m] && g.bound[m](d), E && Ge(e, m)), s;
  }) : [], g.update(), E = !0, K(g.before_update), g.fragment = n ? n(g.ctx) : !1, t.target) {
    if (t.hydrate) {
      const m = Pe(t.target);
      g.fragment && g.fragment.l(m), m.forEach(C);
    } else
      g.fragment && g.fragment.c();
    t.intro && Ve(e.$$.fragment), Ye(e, t.target, t.anchor, t.customElement), Oe();
  }
  Y(_);
}
let qe;
typeof HTMLElement == "function" && (qe = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: e } = this.$$;
    this.$$.on_disconnect = e.map(se).filter(re);
    for (const t in this.$$.slotted)
      this.appendChild(this.$$.slotted[t]);
  }
  attributeChangedCallback(e, t, l) {
    this[e] = l;
  }
  disconnectedCallback() {
    K(this.$$.on_disconnect);
  }
  $destroy() {
    Ze(this, 1), this.$destroy = z;
  }
  $on(e, t) {
    if (!re(t))
      return z;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(t), () => {
      const n = l.indexOf(t);
      n !== -1 && l.splice(n, 1);
    };
  }
  $set(e) {
    this.$$set && !Ie(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
});
function we(e, t, l) {
  const n = e.slice();
  return n[13] = t[l], n;
}
function Fe(e, t, l) {
  const n = e.slice();
  return n[16] = t[l], n;
}
function $e(e, t, l) {
  const n = e.slice();
  return n[13] = t[l], n;
}
function Ee(e, t, l) {
  const n = e.slice();
  return n[21] = t[l], n;
}
function Se(e, t, l) {
  const n = e.slice();
  return n[16] = t[l], n;
}
function Ce(e) {
  let t, l = (
    /*folder*/
    e[16].name + ""
  ), n, c;
  return {
    c() {
      t = h("option"), n = A(l), t.__value = c = /*folder*/
      e[16].name, t.value = t.__value;
    },
    m(o, a) {
      S(o, t, a), f(t, n);
    },
    p(o, a) {
      a & /*folders*/
      4 && l !== (l = /*folder*/
      o[16].name + "") && G(n, l), a & /*folders*/
      4 && c !== (c = /*folder*/
      o[16].name) && (t.__value = c, t.value = t.__value);
    },
    d(o) {
      o && C(t);
    }
  };
}
function Te(e) {
  let t, l, n, c = (
    /*folder*/
    e[16].name + ""
  ), o, a;
  return {
    c() {
      t = h("li"), l = h("i"), n = b(), o = A(c), a = A("/"), p(l, "class", "fa fa-folder"), p(l, "aria-hidden", "true");
    },
    m(u, _) {
      S(u, t, _), f(t, l), f(t, n), f(t, o), f(t, a);
    },
    p(u, _) {
      _ & /*folders*/
      4 && c !== (c = /*folder*/
      u[16].name + "") && G(o, c);
    },
    d(u) {
      u && C(t);
    }
  };
}
function je(e) {
  let t, l, n, c = (
    /*subFolder*/
    e[21].name + ""
  ), o, a;
  return {
    c() {
      t = h("li"), l = h("i"), n = b(), o = A(c), a = A("/"), p(l, "class", "fa fa-folder"), p(l, "aria-hidden", "true");
    },
    m(u, _) {
      S(u, t, _), f(t, l), f(t, n), f(t, o), f(t, a);
    },
    p(u, _) {
      _ & /*subFolders, folders*/
      12 && c !== (c = /*subFolder*/
      u[21].name + "") && G(o, c);
    },
    d(u) {
      u && C(t);
    }
  };
}
function Me(e) {
  let t, l, n, c = (
    /*file*/
    e[13].name + ""
  ), o;
  return {
    c() {
      t = h("li"), l = h("i"), n = b(), o = A(c), p(l, "class", "fa fa-file-code"), p(l, "aria-hidden", "true");
    },
    m(a, u) {
      S(a, t, u), f(t, l), f(t, n), f(t, o);
    },
    p(a, u) {
      u & /*files, folders*/
      36 && c !== (c = /*file*/
      a[13].name + "") && G(o, c);
    },
    d(a) {
      a && C(t);
    }
  };
}
function Le(e) {
  let t, l, n, c, o = (
    /*folder*/
    e[16].folder == "" && Te(e)
  );
  function a(...s) {
    return (
      /*func_1*/
      e[11](
        /*folder*/
        e[16],
        ...s
      )
    );
  }
  let u = (
    /*subFolders*/
    e[3].filter(a)
  ), _ = [];
  for (let s = 0; s < u.length; s += 1)
    _[s] = je(Ee(e, u, s));
  function g(...s) {
    return (
      /*func_2*/
      e[12](
        /*folder*/
        e[16],
        ...s
      )
    );
  }
  let E = (
    /*files*/
    e[5].filter(g)
  ), m = [];
  for (let s = 0; s < E.length; s += 1)
    m[s] = Me($e(e, E, s));
  return {
    c() {
      o && o.c(), t = b(), l = h("ul");
      for (let s = 0; s < _.length; s += 1)
        _[s].c();
      n = b();
      for (let s = 0; s < m.length; s += 1)
        m[s].c();
      c = b();
    },
    m(s, v) {
      o && o.m(s, v), S(s, t, v), S(s, l, v);
      for (let d = 0; d < _.length; d += 1)
        _[d] && _[d].m(l, null);
      f(l, n);
      for (let d = 0; d < m.length; d += 1)
        m[d] && m[d].m(l, null);
      f(l, c);
    },
    p(s, v) {
      if (e = s, /*folder*/
      e[16].folder == "" ? o ? o.p(e, v) : (o = Te(e), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), v & /*subFolders, folders*/
      12) {
        u = /*subFolders*/
        e[3].filter(a);
        let d;
        for (d = 0; d < u.length; d += 1) {
          const y = Ee(e, u, d);
          _[d] ? _[d].p(y, v) : (_[d] = je(y), _[d].c(), _[d].m(l, n));
        }
        for (; d < _.length; d += 1)
          _[d].d(1);
        _.length = u.length;
      }
      if (v & /*files, folders*/
      36) {
        E = /*files*/
        e[5].filter(g);
        let d;
        for (d = 0; d < E.length; d += 1) {
          const y = $e(e, E, d);
          m[d] ? m[d].p(y, v) : (m[d] = Me(y), m[d].c(), m[d].m(l, c));
        }
        for (; d < m.length; d += 1)
          m[d].d(1);
        m.length = E.length;
      }
    },
    d(s) {
      o && o.d(s), s && C(t), s && C(l), X(_, s), X(m, s);
    }
  };
}
function Ne(e) {
  let t, l, n, c = (
    /*file*/
    e[13].name + ""
  ), o;
  return {
    c() {
      t = h("li"), l = h("i"), n = b(), o = A(c), p(l, "class", "fa fa-file-code"), p(l, "aria-hidden", "true");
    },
    m(a, u) {
      S(a, t, u), f(t, l), f(t, n), f(t, o);
    },
    p(a, u) {
      u & /*files*/
      32 && c !== (c = /*file*/
      a[13].name + "") && G(o, c);
    },
    d(a) {
      a && C(t);
    }
  };
}
function et(e) {
  let t, l, n, c, o, a, u, _, g, E, m, s, v, d, y, T, j, H, ue, M, O, ae, q, Q, de, R, _e, le, he, J, W, ee, me, L, ne, oe, pe, B = (
    /*folders*/
    e[2].filter(Ae)
  ), k = [];
  for (let r = 0; r < B.length; r += 1)
    k[r] = Ce(Se(e, B, r));
  let I = (
    /*folders*/
    e[2]
  ), w = [];
  for (let r = 0; r < I.length; r += 1)
    w[r] = Le(Fe(e, I, r));
  let U = (
    /*files*/
    e[5].filter(He)
  ), F = [];
  for (let r = 0; r < U.length; r += 1)
    F[r] = Ne(we(e, U, r));
  return {
    c() {
      t = h("head"), t.innerHTML = `<meta charset="UTF-8"/> 
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/> 
    <meta name="viewport" content="width=device-width"/>`, l = b(), n = h("link"), c = b(), o = h("div"), a = h("div"), u = h("div"), _ = h("div"), g = h("div"), g.innerHTML = '<h5 class="card-title">Add Files/Folders</h5>', E = b(), m = h("div"), s = h("div"), v = h("input"), d = b(), y = h("select"), T = h("option"), T.textContent = "Select Type(Folder/File)", j = h("option"), j.textContent = "File", H = h("option"), H.textContent = "Folder", ue = b(), M = h("select"), O = h("option"), O.textContent = "Select Folder";
      for (let r = 0; r < k.length; r += 1)
        k[r].c();
      ae = b(), q = h("div"), Q = h("button"), Q.textContent = "Save", de = b(), R = h("button"), R.textContent = "Cancel", _e = b(), le = h("style"), le.textContent = "li{list-style-type: none;}", he = b(), J = h("div"), W = h("div"), ee = h("div"), ee.innerHTML = '<h5 class="card-title">Folder Structure</h5>', me = b(), L = h("div");
      for (let r = 0; r < w.length; r += 1)
        w[r].c();
      ne = b();
      for (let r = 0; r < F.length; r += 1)
        F[r].c();
      this.c = z, p(n, "rel", "stylesheet"), p(n, "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"), p(g, "class", "card-header"), p(v, "class", "form-control"), p(v, "placeholder", "Enter File/Folder Name"), T.__value = "", T.value = T.__value, j.__value = "File", j.value = j.__value, H.__value = "Folder", H.value = H.__value, p(y, "class", "form-select mt-2"), /*inputType*/
      e[1] === void 0 && Z(() => (
        /*select0_change_handler*/
        e[9].call(y)
      )), O.__value = "", O.value = O.__value, p(M, "class", "form-select mt-2"), /*chosenFolder*/
      e[4] === void 0 && Z(() => (
        /*select1_change_handler*/
        e[10].call(M)
      )), p(Q, "class", "btn btn-primary mt-2"), p(R, "class", "btn btn-primary mt-2"), p(q, "class", "text-center"), p(s, "class", "mb-3"), p(m, "class", "card-body"), p(_, "class", "card"), p(u, "class", "col-md-6 mx-3"), p(ee, "class", "card-header"), p(L, "class", "card-body"), p(W, "class", "card"), p(J, "class", "col-md-6"), p(a, "class", "d-flex align-items-center justify-content-start vh-100"), p(o, "class", "row");
    },
    m(r, $) {
      S(r, t, $), S(r, l, $), S(r, n, $), S(r, c, $), S(r, o, $), f(o, a), f(a, u), f(u, _), f(_, g), f(_, E), f(_, m), f(m, s), f(s, v), ve(
        v,
        /*inputtedName*/
        e[0]
      ), f(s, d), f(s, y), f(y, T), f(y, j), f(y, H), te(
        y,
        /*inputType*/
        e[1],
        !0
      ), f(s, ue), f(s, M), f(M, O);
      for (let i = 0; i < k.length; i += 1)
        k[i] && k[i].m(M, null);
      te(
        M,
        /*chosenFolder*/
        e[4],
        !0
      ), f(s, ae), f(s, q), f(q, Q), f(q, de), f(q, R), f(a, _e), f(a, le), f(a, he), f(a, J), f(J, W), f(W, ee), f(W, me), f(W, L);
      for (let i = 0; i < w.length; i += 1)
        w[i] && w[i].m(L, null);
      f(L, ne);
      for (let i = 0; i < F.length; i += 1)
        F[i] && F[i].m(L, null);
      oe || (pe = [
        V(
          v,
          "input",
          /*input_input_handler*/
          e[8]
        ),
        V(
          y,
          "change",
          /*select0_change_handler*/
          e[9]
        ),
        V(
          M,
          "change",
          /*select1_change_handler*/
          e[10]
        ),
        V(
          Q,
          "click",
          /*saveItem*/
          e[6]
        ),
        V(
          R,
          "click",
          /*cancelItem*/
          e[7]
        )
      ], oe = !0);
    },
    p(r, [$]) {
      if ($ & /*inputtedName*/
      1 && v.value !== /*inputtedName*/
      r[0] && ve(
        v,
        /*inputtedName*/
        r[0]
      ), $ & /*inputType*/
      2 && te(
        y,
        /*inputType*/
        r[1]
      ), $ & /*folders*/
      4) {
        B = /*folders*/
        r[2].filter(Ae);
        let i;
        for (i = 0; i < B.length; i += 1) {
          const N = Se(r, B, i);
          k[i] ? k[i].p(N, $) : (k[i] = Ce(N), k[i].c(), k[i].m(M, null));
        }
        for (; i < k.length; i += 1)
          k[i].d(1);
        k.length = B.length;
      }
      if ($ & /*chosenFolder, folders*/
      20 && te(
        M,
        /*chosenFolder*/
        r[4]
      ), $ & /*files, folders, subFolders*/
      44) {
        I = /*folders*/
        r[2];
        let i;
        for (i = 0; i < I.length; i += 1) {
          const N = Fe(r, I, i);
          w[i] ? w[i].p(N, $) : (w[i] = Le(N), w[i].c(), w[i].m(L, ne));
        }
        for (; i < w.length; i += 1)
          w[i].d(1);
        w.length = I.length;
      }
      if ($ & /*files*/
      32) {
        U = /*files*/
        r[5].filter(He);
        let i;
        for (i = 0; i < U.length; i += 1) {
          const N = we(r, U, i);
          F[i] ? F[i].p(N, $) : (F[i] = Ne(N), F[i].c(), F[i].m(L, null));
        }
        for (; i < F.length; i += 1)
          F[i].d(1);
        F.length = U.length;
      }
    },
    i: z,
    o: z,
    d(r) {
      r && C(t), r && C(l), r && C(n), r && C(c), r && C(o), X(k, r), X(w, r), X(F, r), oe = !1, K(pe);
    }
  };
}
const Ae = (e) => e.folder == "", He = (e) => e.folder == "";
function tt(e, t, l) {
  let n = "", c = "", o = [], a = [], u = "", _ = [];
  const g = () => {
    c === "Folder" ? (l(2, o = [...o, { name: n, folder: u }]), u != "" && l(3, a = [...a, { name: n, folder: u }]), console.log(u), console.log(o)) : c === "File" && (console.log(u), l(5, _ = [..._, { name: n, folder: u }])), l(0, n = ""), l(1, c = ""), l(4, u = "");
  }, E = () => {
    l(0, n = ""), l(1, c = ""), l(4, u = "");
  };
  function m() {
    n = this.value, l(0, n);
  }
  function s() {
    c = be(this), l(1, c);
  }
  function v() {
    u = be(this), l(4, u), l(2, o);
  }
  return [
    n,
    c,
    o,
    a,
    u,
    _,
    g,
    E,
    m,
    s,
    v,
    (T, j) => j.folder == T.name,
    (T, j) => j.folder === T.name
  ];
}
class We extends qe {
  constructor(t) {
    super(), Je(
      this,
      {
        target: this.shadowRoot,
        props: xe(this.attributes),
        customElement: !0
      },
      tt,
      et,
      Be,
      {},
      null
    ), t && t.target && S(t.target, this, t.anchor);
  }
}
customElements.define("folder-structure-component", We);
const lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" }));
export {
  lt as FolderStructure
};
