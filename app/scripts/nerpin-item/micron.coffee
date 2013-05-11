define ['nerpin-item'], (NerpinItem) ->
  class Micron extends NerpinItem
    valueFor0x06: (value) ->
      if value >= 0
        return value / 128
      else
        return 127 - (Math.abs(value) / 128)
    valueFor0x26: (value) ->
      if value >= 0
        return value % 128
      else
        return 128 - (Math.abs(value) % 128)
