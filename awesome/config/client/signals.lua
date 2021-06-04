local awful = require('awful')
local gears = require('gears')
local beautiful = require('beautiful')

local function UpdateClient(client)

  if client.fullscreen then
    client.shape = gears.shape.rectangle
  else
    client.shape = beautiful.rounded_rect
  end
end

_G.client.connect_signal(
  'manage',
  function(client)
    client:emit_signal(
      'request::activate',
      'mouse_enter',
      { raise = true }
    )

    if not _G.awesome.startup then
      awful.client.setslave(client)
    end

    if _G.awesome.startup and not client.size_hints.user_position and not client.size_hints.program_position then
      awful.placement.no_offscreen(client)
    end

    UpdateClient(client)
  end
)

_G.client.connect_signal(
  'mouse::enter',
  function(client)
    client:emit_signal(
      'request::activate',
      'mouse_enter',
      { raise = true }
    )
  end
)

_G.client.connect_signal(
  'focus',
  function(client)
    client.border_color = beautiful.border_focus
  end
)

_G.client.connect_signal(
  'unfocus',
  function(client)
    client.border_color = beautiful.border_normal
  end
)

_G.client.connect_signal(
	'property::fullscreen',
	function(client)
		if client.fullscreen then
			client.shape = beautiful.client_shape_rectangle
		else
			UpdateClient(client)
		end
	end
)
