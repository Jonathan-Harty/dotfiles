local wibox = require('wibox')
local awful = require('awful')
local gears = require('gears')
local beautiful = require('beautiful')
local dpi = beautiful.xresources.apply_dpi
local naughty = require('naughty')

return function (icon_high_path, icon_low_path, icon_off_path, high_threshold, low_threshold, signal, command)
  local screen = awful.screen.focused()

  local x_offset = dpi(60)
  local y_offset = dpi(300)
  local slider_width = dpi(50)
  local slider_height = y_offset

  local slider_icon = wibox.widget {
    image = icon_high_path,
    widget = wibox.widget.imagebox
  }

  local slider = wibox({
    screen = screen,
    x = screen.geometry.width - x_offset,
    y = (screen.geometry.height / 2) - (y_offset / 2),
    width = slider_width,
    height = slider_height,
    shape = gears.shape.rounded_rect,
    visible = false,
    ontop = true,
    bg = beautiful.colors.bg_dark
  })

  local slider_bar = wibox.widget {
    widget = wibox.widget.progressbar,
    shape = gears.shape.rounded_bar,
    color = beautiful.colors.fg,
    background_color = beautiful.colors.bg_light_5,
    max_value = 100,
    value = 0
  }

  slider:setup {
    layout = wibox.layout.align.vertical,
    {
      wibox.container.margin(
        slider_bar,
        dpi(14),
        dpi(20),
        dpi(20),
        dpi(20)
      ),
      forced_height = y_offset * 0.80,
      direction = 'east',
      layout = wibox.container.rotate
    },
    wibox.container.margin(slider_icon, dpi(6), dpi(6), dpi(0), dpi(0))
  }

  local hide_slider_timer = gears.timer {
    timeout = 4,
    autostart = true,
    callback = function()
      slider.visible = false
    end
  }

  _G.awesome.connect_signal(signal,
    function()
      awful.spawn.easy_async_with_shell(
        command,
        function(stdout)
          local level = tonumber(stdout)

          if level == nil then
            level = tonumber(string.sub(stdout, 0, string.len(stdout) - 2))

            if level == nil then
              level = 0
            end
          end

          slider_bar.value = level

          if level > high_threshold then
            slider_icon:set_image(icon_high_path)
          elseif level > low_threshold then
            slider_icon:set_image(icon_low_path)
          else
            slider_icon:set_image(icon_off_path)
          end
        end,
        false
      )

      if slider.visible then
        hide_slider_timer:again()
      else
        slider.visible = true
        hide_slider_timer:start()
      end
    end
  )

end