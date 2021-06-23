local awful = require('awful')
local mod_keys = require('config.keys.mod-keys')
local mod_key = mod_keys.mod_key
local alt_key = mod_keys.alt_key
local naughty = require('naughty')

local volume_keys = awful.util.table.join(
  awful.key(
    {},
    'XF86AudioRaiseVolume',
    function()
      awful.spawn('pamixer -i 5')
			_G.awesome.emit_signal('volume_change')
    end,
    {description = 'volume up', group = 'hotkeys'}
  ),
  awful.key(
    {},
    'XF86AudioLowerVolume',
    function()
      awful.spawn('pamixer -d 5')
			_G.awesome.emit_signal('volume_change')
    end,
    {description = 'volume down', group = 'hotkeys'}
  ),
	awful.key(
    {},
    'XF86AudioMute',
		function()
				awful.spawn('pamixer -t')
				_G.awesome.emit_signal('volume_change')
		end,
		{description = 'toggle mute', group = 'hotkeys'}
  ),
  awful.key(
    {mod_key, 'Shift'},
    'u',
    function()
      awful.spawn('pamixer -i 5')
			_G.awesome.emit_signal('volume_change')
    end,
    {description = 'volume up', group = 'hotkeys'}
  ),
  awful.key(
    {mod_key, 'Shift'},
    'd',
    function()
      awful.spawn('pamixer -d 5')
			_G.awesome.emit_signal('volume_change')
    end,
    {description = 'volume down', group = 'hotkeys'}
  ),
	awful.key(
    {mod_key, 'Shift'},
    'm',
		function()
				awful.spawn('pamixer -t')
				_G.awesome.emit_signal("volume_change")
		end,
		{description = "toggle mute", group = "hotkeys"}
  )
)

return volume_keys