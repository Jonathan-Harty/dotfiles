local dir = os.getenv("HOME") .. '/.config/awesome/assets/icons/'

local icons = {
  -- tag icons
  browser         =       dir .. 'browser.svg',
  code            =       dir .. 'code.svg',
  music           =       dir .. 'music.svg',
  social          =       dir .. 'social.svg',
  art             =       dir .. 'art.svg',
  files           =       dir .. 'folder.svg',
  virts           =       dir .. 'computer.svg',
  terminal        =       dir .. 'terminal.svg',
  sandbox         =       dir .. 'lab.svg',

  -- other icons
  awesome         =       dir .. 'awesome_logo.svg',
  menu            =       dir .. 'menu.svg',
  close           =       dir .. 'close.svg',
  power           =       dir .. 'power.svg',
  restart         =       dir .. 'restart.svg',
  sleep           =       dir .. 'sleep.svg',
  logout          =       dir .. 'logout.svg',
  lock            =       dir .. 'lock.svg',
  search          =       dir .. 'search.svg',
  add             =       dir .. 'add.svg',
  volume          =       dir .. 'volume.svg',
  volume_low      =       dir .. 'volume-low.svg',
  mute            =       dir .. 'mute.svg',
  brightness      =       dir .. 'brightness.svg',
  brightness_low  =       dir .. 'brightness-low.svg',
  brightness_high =       dir .. 'brightness-high.svg',

  -- layout icons
  tile            =       dir .. 'layouts/tile.png',
  floating        =       dir .. 'layouts/floating.png',
  fair            =       dir .. 'layouts/fair.png',
  max             =       dir .. 'layouts/max.png',
}

return icons