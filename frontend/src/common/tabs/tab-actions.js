export function selectTab(tabId) {
  return {
    type: 'TAB_SELECTED',
    payload: tabId
  }
}

export function showTabs(...tabs) {
  const tabsToShow = {}
  tabs.map(tab => tabsToShow[tab] = true)
  return {
    type: 'TABS_SHOWHIDE',
    payload: tabsToShow
  }
}
