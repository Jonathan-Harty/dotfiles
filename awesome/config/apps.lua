local filesystem = require('gears.filesystem')

local apps = {
  terminal = 'alacritty',
  browser = 'firefox-developer-edition',
  music = 'spotify',
  text_editor = 'code',
  social = 'discord',
  file_manager = 'dolphin',
  graphics = 'gimp',
  virt_machine = 'virt-manager',
  bluetooth_manager = '',
  appmenu = 'rofi -show drun -theme ' .. filesystem.get_configuration_dir() .. '/config/rofi.rasi',
  window_switcher = 'rofi -show window -theme ' .. filesystem.get_configuration_dir() .. '/config/rofi.rasi',
  autorun = {
    compositor = '',
    bluetooth = '',
    polkit = '',
    keyring = '',
    lockscreen = ''
  },
}

return apps