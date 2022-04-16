export const getPortalContainer = (() => {
  let PortalContainer: HTMLDivElement | null = null;
  return () => {
    if (!PortalContainer) {
      PortalContainer = document.createElement("div");
      PortalContainer.style.zIndex = "50000";
      document.body && document.body.appendChild(PortalContainer);
    }
    return PortalContainer;
  };
})();
