local awful = require('awful')
local mod_keys = require('config.keys.mod-keys')
local mod_key = mod_keys.mod_key
local alt_key = mod_keys.alt_key
local naughty = require('naughty')

local brightness_keys = awful.util.table.join(
  awful.key(
    {},
    'XF86MonBrightnessUp',
    function()
      awful.spawn('light -s sysfs/backlight/ddcci7 -A 5')
      awful.spawn('light -s sysfs/backlight/ddcci8 -A 5')
			_G.awesome.emit_signal('brightness_change')
    end,
    {description = '+5%', group = 'hotkeys'}
  ),
  awful.key(
    {},
    'XF86MonBrightnessDown',
    function()
      awful.spawn('light -s sysfs/backlight/ddcci7 -U 5')
      awful.spawn('light -s sysfs/backlight/ddcci8 -U 5')
			_G.awesome.emit_signal('brightness_change')
    end,
    {description = '-5%', group = 'hotkeys'}
  ),
  awful.key(
    {mod_key, 'Control'},
    'u',
    function()
      awful.spawn('light -s sysfs/backlight/ddcci7 -A 5')
      awful.spawn('light -s sysfs/backlight/ddcci8 -A 5')
			_G.awesome.emit_signal('brightness_change')
    end,
    {description = '+5%', group = 'hotkeys'}
  ),
  awful.key(
    {mod_key, 'Control'},
    'd',
    function()
      awful.spawn('light -s sysfs/backlight/ddcci7 -U 5')
      awful.spawn('light -s sysfs/backlight/ddcci8 -U 5')
			_G.awesome.emit_signal('brightness_change')
    end,
    {description = '-5%', group = 'hotkeys'}
  )
)

return brightness_keys