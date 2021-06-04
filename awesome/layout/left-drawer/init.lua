local wibox = require('wibox')
local gears = require('gears')
local beautiful = require('beautiful')
local dpi = beautiful.xresources.apply_dpi
local apps = require('config.apps')
local awful = require('awful')
local wibox = require('wibox')
local utils = require('utilities.utils')

local left_drawer = function(screen)
  local drawer_width = dpi(80)
  local drawer_content_width = dpi(400)

  local drawer = wibox {
    screen = screen,
    type = 'dock',
    width = drawer_width,
    height = screen.geometry.height - 20,
    x = screen.geometry.x,
    y = screen.geometry.y + 10,
    ontop = true,
    bg = beautiful.colors.bg,
    fg = beautiful.fg,
    shape = utils.prrect(drawer_width, false, true, true, false)
  }

  drawer.is_open = false
  -- drawer.visible = true

  drawer:struts {
    left = drawer_width
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

  end

  local open_drawer = function(running_appmenu, running_window_switcher)
    drawer.width = drawer_width + drawer_content_width
    backdrop.visible = true
    drawer.visible = false
    drawer.visible = true
    drawer:get_children_by_id('drawer_content')[1].visible = true
    drawer.shape = utils.prrect(drawer_width * 0.5, false, true, true, false)
    if running_appmenu then
      drawer:run_appmenu()
    elseif running_window_switcher then
      drawer:run_window_switcher()
    end

    drawer:emit_signal('opened')
  end

  local close_drawer = function()
    drawer.width = drawer_width
    drawer:get_children_by_id('drawer_content')[1].visible = false
    backdrop.visible = false
    drawer.shape = utils.prrect(drawer_width, false, true, true, false)
    drawer:emit_signal('closed')
  end

  function drawer:close()
    if self.is_open then
      close_drawer()
      self.is_open = false
    end
  end

  function drawer:toggle(running_appmenu, running_window_switcher)
    if not drawer.is_open then
      open_drawer(running_appmenu, running_window_switcher)
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
      bg = beautiful.colors.bg_dark,
      widget = wibox.container.background,
      visible = false,
      forced_width = drawer_content_width,
      {
        require('layout.left-drawer.drawer-content')(screen, drawer),
        layout = wibox.layout.stack
      }
    },
    require('layout.left-drawer.bar')(screen, drawer, drawer_width)
  }

  return drawer
end

return left_drawer