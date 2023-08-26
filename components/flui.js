/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.0.
 * Original file: /npm/@floating-ui/dom@1.5.0/dist/floating-ui.dom.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import {
  computePosition as t,
  rectToClientRect as e,
} from "/npm/@floating-ui/core@1.4.0/+esm";
export {
  arrow,
  autoPlacement,
  detectOverflow,
  flip,
  hide,
  inline,
  limitShift,
  offset,
  shift,
  size,
} from "/npm/@floating-ui/core@1.4.0/+esm";
import {
  createCoords as n,
  round as i,
  max as o,
  min as r,
  floor as l,
} from "/npm/@floating-ui/utils@0.1.0/+esm";
import {
  getDocumentElement as c,
  isElement as s,
  getOverflowAncestors as f,
  isHTMLElement as u,
  getWindow as h,
  getComputedStyle as a,
  getNodeName as d,
  isOverflowElement as p,
  getNodeScroll as g,
  isTableElement as m,
  isContainingBlock as x,
  isWebKit as y,
  getParentNode as w,
  isLastTraversableNode as v,
} from "/npm/@floating-ui/utils@0.1.0/dom/+esm";
export { getOverflowAncestors } from "/npm/@floating-ui/utils@0.1.0/dom/+esm";
function b(t) {
  const e = a(t);
  let n = parseFloat(e.width) || 0,
    o = parseFloat(e.height) || 0;
  const r = u(t),
    l = r ? t.offsetWidth : n,
    c = r ? t.offsetHeight : o,
    s = i(n) !== l || i(o) !== c;
  return s && ((n = l), (o = c)), { width: n, height: o, $: s };
}
function L(t) {
  return s(t) ? t : t.contextElement;
}
function R(t) {
  const e = L(t);
  if (!u(e)) return n(1);
  const o = e.getBoundingClientRect(),
    { width: r, height: l, $: c } = b(e);
  let s = (c ? i(o.width) : o.width) / r,
    f = (c ? i(o.height) : o.height) / l;
  return (
    (s && Number.isFinite(s)) || (s = 1),
    (f && Number.isFinite(f)) || (f = 1),
    { x: s, y: f }
  );
}
const T = n(0);
function E(t) {
  const e = h(t);
  return y() && e.visualViewport
    ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
    : T;
}
function F(t, i, o, r) {
  void 0 === i && (i = !1), void 0 === o && (o = !1);
  const l = t.getBoundingClientRect(),
    c = L(t);
  let f = n(1);
  i && (r ? s(r) && (f = R(r)) : (f = R(t)));
  const u = (function (t, e, n) {
    return void 0 === e && (e = !1), !(!n || (e && n !== h(t))) && e;
  })(c, o, r)
    ? E(c)
    : n(0);
  let d = (l.left + u.x) / f.x,
    p = (l.top + u.y) / f.y,
    g = l.width / f.x,
    m = l.height / f.y;
  if (c) {
    const t = h(c),
      e = r && s(r) ? h(r) : r;
    let n = t.frameElement;
    for (; n && r && e !== t; ) {
      const t = R(n),
        e = n.getBoundingClientRect(),
        i = a(n),
        o = e.left + (n.clientLeft + parseFloat(i.paddingLeft)) * t.x,
        r = e.top + (n.clientTop + parseFloat(i.paddingTop)) * t.y;
      (d *= t.x),
        (p *= t.y),
        (g *= t.x),
        (m *= t.y),
        (d += o),
        (p += r),
        (n = h(n).frameElement);
    }
  }
  return e({ width: g, height: m, x: d, y: p });
}
function O(t) {
  return F(c(t)).left + g(t).scrollLeft;
}
function W(t, i, r) {
  let l;
  if ("viewport" === i)
    l = (function (t, e) {
      const n = h(t),
        i = c(t),
        o = n.visualViewport;
      let r = i.clientWidth,
        l = i.clientHeight,
        s = 0,
        f = 0;
      if (o) {
        (r = o.width), (l = o.height);
        const t = y();
        (!t || (t && "fixed" === e)) && ((s = o.offsetLeft), (f = o.offsetTop));
      }
      return { width: r, height: l, x: s, y: f };
    })(t, r);
  else if ("document" === i)
    l = (function (t) {
      const e = c(t),
        n = g(t),
        i = t.ownerDocument.body,
        r = o(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth),
        l = o(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
      let s = -n.scrollLeft + O(t);
      const f = -n.scrollTop;
      return (
        "rtl" === a(i).direction && (s += o(e.clientWidth, i.clientWidth) - r),
        { width: r, height: l, x: s, y: f }
      );
    })(c(t));
  else if (s(i))
    l = (function (t, e) {
      const i = F(t, !0, "fixed" === e),
        o = i.top + t.clientTop,
        r = i.left + t.clientLeft,
        l = u(t) ? R(t) : n(1);
      return {
        width: t.clientWidth * l.x,
        height: t.clientHeight * l.y,
        x: r * l.x,
        y: o * l.y,
      };
    })(i, r);
  else {
    const e = E(t);
    l = { ...i, x: i.x - e.x, y: i.y - e.y };
  }
  return e(l);
}
function H(t, e) {
  const n = w(t);
  return !(n === e || !s(n) || v(n)) && ("fixed" === a(n).position || H(n, e));
}
function z(t, e, i) {
  const o = u(e),
    r = c(e),
    l = "fixed" === i,
    s = F(t, !0, l, e);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const h = n(0);
  if (o || (!o && !l))
    if ((("body" !== d(e) || p(r)) && (f = g(e)), o)) {
      const t = F(e, !0, l, e);
      (h.x = t.x + e.clientLeft), (h.y = t.y + e.clientTop);
    } else r && (h.x = O(r));
  return {
    x: s.left + f.scrollLeft - h.x,
    y: s.top + f.scrollTop - h.y,
    width: s.width,
    height: s.height,
  };
}
function A(t, e) {
  return u(t) && "fixed" !== a(t).position ? (e ? e(t) : t.offsetParent) : null;
}
function C(t, e) {
  const n = h(t);
  if (!u(t)) return n;
  let i = A(t, e);
  for (; i && m(i) && "static" === a(i).position; ) i = A(i, e);
  return i &&
    ("html" === d(i) ||
      ("body" === d(i) && "static" === a(i).position && !x(i)))
    ? n
    : i ||
        (function (t) {
          let e = w(t);
          for (; u(e) && !v(e); ) {
            if (x(e)) return e;
            e = w(e);
          }
          return null;
        })(t) ||
        n;
}
const P = {
  convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
    let { rect: e, offsetParent: i, strategy: o } = t;
    const r = u(i),
      l = c(i);
    if (i === l) return e;
    let s = { scrollLeft: 0, scrollTop: 0 },
      f = n(1);
    const h = n(0);
    if (
      (r || (!r && "fixed" !== o)) &&
      (("body" !== d(i) || p(l)) && (s = g(i)), u(i))
    ) {
      const t = F(i);
      (f = R(i)), (h.x = t.x + i.clientLeft), (h.y = t.y + i.clientTop);
    }
    return {
      width: e.width * f.x,
      height: e.height * f.y,
      x: e.x * f.x - s.scrollLeft * f.x + h.x,
      y: e.y * f.y - s.scrollTop * f.y + h.y,
    };
  },
  getDocumentElement: c,
  getClippingRect: function (t) {
    let { element: e, boundary: n, rootBoundary: i, strategy: l } = t;
    const c = [
        ...("clippingAncestors" === n
          ? (function (t, e) {
              const n = e.get(t);
              if (n) return n;
              let i = f(t).filter((t) => s(t) && "body" !== d(t)),
                o = null;
              const r = "fixed" === a(t).position;
              let l = r ? w(t) : t;
              for (; s(l) && !v(l); ) {
                const e = a(l),
                  n = x(l);
                n || "fixed" !== e.position || (o = null),
                  (
                    r
                      ? !n && !o
                      : (!n &&
                          "static" === e.position &&
                          o &&
                          ["absolute", "fixed"].includes(o.position)) ||
                        (p(l) && !n && H(t, l))
                  )
                    ? (i = i.filter((t) => t !== l))
                    : (o = e),
                  (l = w(l));
              }
              return e.set(t, i), i;
            })(e, this._c)
          : [].concat(n)),
        i,
      ],
      u = c[0],
      h = c.reduce((t, n) => {
        const i = W(e, n, l);
        return (
          (t.top = o(i.top, t.top)),
          (t.right = r(i.right, t.right)),
          (t.bottom = r(i.bottom, t.bottom)),
          (t.left = o(i.left, t.left)),
          t
        );
      }, W(e, u, l));
    return {
      width: h.right - h.left,
      height: h.bottom - h.top,
      x: h.left,
      y: h.top,
    };
  },
  getOffsetParent: C,
  getElementRects: async function (t) {
    let { reference: e, floating: n, strategy: i } = t;
    const o = this.getOffsetParent || C,
      r = this.getDimensions;
    return {
      reference: z(e, await o(n), i),
      floating: { x: 0, y: 0, ...(await r(n)) },
    };
  },
  getClientRects: function (t) {
    return Array.from(t.getClientRects());
  },
  getDimensions: function (t) {
    return b(t);
  },
  getScale: R,
  isElement: s,
  isRTL: function (t) {
    return "rtl" === a(t).direction;
  },
};
function B(t, e, n, i) {
  void 0 === i && (i = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: u = !0,
      elementResize: h = "function" == typeof ResizeObserver,
      layoutShift: a = "function" == typeof IntersectionObserver,
      animationFrame: d = !1,
    } = i,
    p = L(t),
    g = s || u ? [...(p ? f(p) : []), ...f(e)] : [];
  g.forEach((t) => {
    s && t.addEventListener("scroll", n, { passive: !0 }),
      u && t.addEventListener("resize", n);
  });
  const m =
    p && a
      ? (function (t, e) {
          let n,
            i = null;
          const s = c(t);
          function f() {
            clearTimeout(n), i && i.disconnect(), (i = null);
          }
          return (
            (function c(u, h) {
              void 0 === u && (u = !1), void 0 === h && (h = 1), f();
              const {
                left: a,
                top: d,
                width: p,
                height: g,
              } = t.getBoundingClientRect();
              if ((u || e(), !p || !g)) return;
              const m = {
                rootMargin:
                  -l(d) +
                  "px " +
                  -l(s.clientWidth - (a + p)) +
                  "px " +
                  -l(s.clientHeight - (d + g)) +
                  "px " +
                  -l(a) +
                  "px",
                threshold: o(0, r(1, h)) || 1,
              };
              let x = !0;
              function y(t) {
                const e = t[0].intersectionRatio;
                if (e !== h) {
                  if (!x) return c();
                  e
                    ? c(!1, e)
                    : (n = setTimeout(() => {
                        c(!1, 1e-7);
                      }, 100));
                }
                x = !1;
              }
              try {
                i = new IntersectionObserver(y, {
                  ...m,
                  root: s.ownerDocument,
                });
              } catch (t) {
                i = new IntersectionObserver(y, m);
              }
              i.observe(t);
            })(!0),
            f
          );
        })(p, n)
      : null;
  let x,
    y = -1,
    w = null;
  h &&
    ((w = new ResizeObserver((t) => {
      let [i] = t;
      i &&
        i.target === p &&
        w &&
        (w.unobserve(e),
        cancelAnimationFrame(y),
        (y = requestAnimationFrame(() => {
          w && w.observe(e);
        }))),
        n();
    })),
    p && !d && w.observe(p),
    w.observe(e));
  let v = d ? F(t) : null;
  return (
    d &&
      (function e() {
        const i = F(t);
        !v ||
          (i.x === v.x &&
            i.y === v.y &&
            i.width === v.width &&
            i.height === v.height) ||
          n();
        (v = i), (x = requestAnimationFrame(e));
      })(),
    n(),
    () => {
      g.forEach((t) => {
        s && t.removeEventListener("scroll", n),
          u && t.removeEventListener("resize", n);
      }),
        m && m(),
        w && w.disconnect(),
        (w = null),
        d && cancelAnimationFrame(x);
    }
  );
}
const D = (e, n, i) => {
  const o = new Map(),
    r = { platform: P, ...i },
    l = { ...r.platform, _c: o };
  return t(e, n, { ...r, platform: l });
};
export { B as autoUpdate, D as computePosition, P as platform };
export default null;
//# sourceMappingURL=/sm/c8a8acf26c00981d7fe1dff5f454dc603e826d4b5562d466e016047aba373e8e.map
