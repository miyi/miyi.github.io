export const compute = (flui, button, tooltip, arrow) => {
  if (button && tooltip && arrow) {
    flui
      .computePosition(button, tooltip, {
        placement: "bottom",
        middleware: [flui.flip(), flui.shift({padding: 5}), flui.offset(6), flui.arrow({element: arrow})],
      })
      .then(({ x, y }) => {
        console.log(x, y)
        Object.assign(tooltip.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
  } else {
    return null;
  }
};
