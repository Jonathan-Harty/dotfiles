local awful = require('awful')
local mod_keys = require('config.keys.mod-keys')
local mod_key = mod_keys.mod_key
local alt_key = mod_keys.alt_key
local apps = require('config.apps')
local volume_keys = require('config.keys.volume-keys')
local brightness_keys = require('config.keys.brightness-keys')
local drawer_keys = require('config.keys.drawer-keys')
local layout_keys = require('config.keys.layout-keys')

local key_bindings = awful.util.table.join(
  awful.key({mod_key, 'Control'},
		'r',
		_G.awesome.restart,
		{description = 'reload awesome', group = 'awesome'}
	),
	
  awful.key(
    {mod_key},
    'Return',
    function()
      awful.spawn(apps.terminal)
    end,
    {description = 'open terminal', group = 'launcher'}
  ),
	awful.key(
		{mod_key},
		'm',
		function()
			local c = _G.client.focus
			if c then
				c:lower()
				c.minimized = true
			end
		end,
		{description = 'minimize focused client', group = 'screen'}
	),
	awful.key(
		{mod_key},
		'n',
		function()
			local c = awful.client.restore()
			-- Focus restored client
			if c then
				c:emit_signal('request::activate')
				c:raise()
			end
		end,
		{description = 'restore minimized', group = 'screen'}
	)
)

key_bindings = awful.util.table.join(
	key_bindings,
	volume_keys,
	brightness_keys,
	drawer_keys,
	layout_keys
)

for i = 1, 9 do
	-- Hack to only show tags 1 and 9 in the shortcut window (mod+s)
	local descr_view, descr_toggle, descr_move, descr_toggle_focus
	if i == 1 or i == 9 then
		descr_view = {description = 'view tag #', group = 'tag'}
		descr_toggle = {description = 'toggle tag #', group = 'tag'}
		descr_move = {description = 'move focused client to tag #', group = 'tag'}
		descr_toggle_focus = {description = 'toggle focused client on tag #', group = 'tag'}
	end
	key_bindings =
		awful.util.table.join(
		key_bindings,
		-- View tag only.
		awful.key(
			{mod_key},
			'#' .. i + 9,
			function()
				local focused = awful.screen.focused()
				local tag = focused.tags[i]
				if tag then
					tag:view_only()
				end
			end,
			descr_view
		),
		-- Toggle tag display.
		awful.key(
			{mod_key, 'Control'},
			'#' .. i + 9,
			function()
				local focused = awful.screen.focused()
				local tag = focused.tags[i]
				if tag then
					awful.tag.viewtoggle(tag)
				end
			end,
			descr_toggle
		),
		-- Move client to tag.
		awful.key(
			{mod_key, 'Shift'},
			'#' .. i + 9,
			function()
				if _G.client.focus then
					local tag = _G.client.focus.screen.tags[i]
					if tag then
						_G.client.focus:move_to_tag(tag)
					end
				end
			end,
			descr_move
		),
		-- Toggle tag on focused client.
		awful.key(
			{mod_key, 'Control', 'Shift'},
			'#' .. i + 9,
			function()
				if _G.client.focus then
					local tag = _G.client.focus.screen.tags[i]
					if tag then
						_G.client.focus:toggle_tag(tag)
					end
				end
			end,
			descr_toggle_focus
		)
	)
end

return key_bindings
