local wibox = require('wibox')
local beautiful = require('beautiful')
local gears = require('gears')
local awful = require('awful')
local icons = require('assets.icons')
local dpi = beautiful.xresources.apply_dpi
local container = require('widgets.icon.container')
local TagList = require('widgets.tag-list')
local clock_widget = require('widgets.clock')


local bar = function(screen, drawer, width)
  local systray = wibox.widget.systray()
  systray:set_horizontal(false)
  systray:set_base_size(30)


  local menu_icon = wibox.widget {
		{
			id = 'menu_btn',
			image = icons.menu,
			resize = true,
			widget = wibox.widget.imagebox
		},
		margins = dpi(20),
		widget = wibox.container.margin
	}

  local open_drawer_button = wibox.widget {
    wibox.widget {
      menu_icon,
      widget = container
    },
    bg = beautiful.colors.bg_light_5,
    widget = wibox.container.background
  }

  open_drawer_button:buttons(
    gears.table.join(
      awful.button(
        {},
        1,
        nil,
        function()
          drawer:toggle()
        end
      )
    )
  )

  drawer:connect_signal(
    'opened',
    function()
      menu_icon.menu_btn:set_image(gears.surface(icons.close))
    end
  )

  drawer:connect_signal(
    'closed',
    function()
      menu_icon.menu_btn:set_image(gears.surface(icons.menu))
    end
  )

  local LayoutBox = function(s)
    local layout_box = container(awful.widget.layoutbox(s))
    layout_box:buttons(
      awful.util.table.join(
        awful.button(
          {},
          1,
          function()
            awful.layout.inc(1)
          end
        ),
        awful.button(
          {},
          3,
          function()
            awful.layout.inc(-1)
          end
        ),
        awful.button(
          {},
          4,
          function()
            awful.layout.inc(1)
          end
        ),
        awful.button(
          {},
          5,
          function()
            awful.layout.inc(-1)
          end
        )
      )
    )
    return layout_box
  end

  local final_bar = wibox.widget {
    id = 'drawer_bar',
    layout = wibox.layout.align.vertical,
    forced_width = width,
    {
      layout = wibox.layout.fixed.vertical,
      open_drawer_button,
      TagList(screen)
    },
    nil,
    {
      layout = wibox.layout.fixed.vertical,
      wibox.container.margin(systray, dpi(14), dpi(14)),
      {
        clock_widget,
        valign = 'center',
        halign = 'center',
        layout = wibox.container.place
      },
      
      wibox.container.margin(LayoutBox(screen), dpi(20), dpi(20), dpi(0), dpi(26))
    },
  }

  return final_bar
end

return bar