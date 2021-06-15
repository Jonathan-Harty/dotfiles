local wibox = require('wibox')
local gears = require('gears')
local beautiful = require('beautiful')
local dpi = beautiful.xresources.apply_dpi
local apps = require('config.apps')
local awful = require('awful')
local wibox = require('wibox')
local utils = require('utilities.utils')
local filesystem = require('gears.filesystem')

local left_drawer = function(screen)
  local drawer = wibox {
    screen = screen,
    type = 'dock',
    width = beautiful.bar_width,
    height = screen.geometry.height - 20,
    x = screen.geometry.x,
    y = screen.geometry.y + 10,
    ontop = true,
    bg = beautiful.colors.bg,
    fg = beautiful.colors.fg,
    shape = utils.prrect(beautiful.bar_width, false, true, true, false)
  }

  drawer.is_open = false
  -- drawer.visible = true

  drawer:struts {
    left = beautiful.bar_width
  }

  local backdrop = wibox {
    ontop = true,
    screen = screen,
    bg = beautiful.colors.transparent,
    type = 'utility',
    x = screen.geometry.x,
    y = screen.geometry.y,
    width = screen.geometry.width,
    height = screen.geometry.height
  }

  function drawer:run_appmenu()
    _G.awesome.spawn(
      apps.appmenu,
      false,
      false,
      false,
      false,
      function ()
        drawer:toggle()
      end
    )
  end

  function drawer:run_window_switcher()
    _G.awesome.spawn(
      apps.window_switcher,
      false,
      false,
      false,
      false,
      function ()
        drawer:toggle()
      end
    )
  end

  function drawer:run_app_switcher()
    local curr_tag = awful.screen.focused().selected_tag.name

    local regex = '^' .. curr_tag .. ' '
    local rofi_loc = filesystem.get_configuration_dir() .. '/config/rofi.rasi'
    _G.awesome.spawn(
      'rofi -show window -theme ' .. rofi_loc .. ' -matching regex -filter "' .. regex .. '"',
      false,
      false,
      false,
      false,
      function()
        drawer:toggle()
      end
    )
  end

  local open_drawer = function()
    drawer.width = beautiful.bar_width + beautiful.drawer_content_width
    backdrop.visible = true
    drawer.visible = false
    drawer.visible = true
    drawer:get_children_by_id('drawer_content')[1].visible = true
    drawer.shape = utils.prrect(beautiful.bar_width * 0.5, false, true, true, false)

    drawer:emit_signal('opened')
  end

  local close_drawer = function()
    drawer.width = beautiful.bar_width
    drawer:get_children_by_id('drawer_content')[1].visible = false
    backdrop.visible = false
    drawer.shape = utils.prrect(beautiful.bar_width, false, true, true, false)
    drawer:emit_signal('closed')
  end

  function drawer:close()
    if self.is_open then
      close_drawer()
      self.is_open = false
    end
  end

  function drawer:toggle()
    if not drawer.is_open then
      open_drawer()
    else
      close_drawer()
    end

    drawer.is_open = not drawer.is_open
  end

  backdrop:buttons(
    awful.util.table.join(
      awful.button(
        {},
        1,
        function()
          drawer:toggle()
        end
      )
    )
  )

  drawer:setup {
    layout = wibox.layout.align.horizontal,
    nil,
    {
      id = 'drawer_content',
      bg = beautiful.colors.bg_darker,
      widget = wibox.container.background,
      visible = false,
      forced_width = beautiful.drawer_content_width,
      {
        require('layout.left-drawer.drawer-content')(screen, drawer),
        layout = wibox.layout.stack
      }
    },
    require('layout.left-drawer.bar')(screen, drawer, beautiful.bar_width)
  }

  return drawer
end

return left_drawer
