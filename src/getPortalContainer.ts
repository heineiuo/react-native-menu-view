let PortalContainer: HTMLDivElement | null = null

export function getPortalContainer(): HTMLDivElement {
  if (!PortalContainer) {
    PortalContainer = document.createElement('div')
    document.body && document.body.appendChild(PortalContainer)
  }
  return PortalContainer
}

export default getPortalContainer
