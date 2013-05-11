define ['nerpin-item'], (NerpinItem) ->
  class Nerpin
    constructor: (data, nerpinItemClass) ->
      unless nerpinItemClass
        nerpinItemClass = NerpinItem
      @_items = for name, attrs of data
        new nerpinItemClass(name, attrs)
    items: () ->
      @_items
