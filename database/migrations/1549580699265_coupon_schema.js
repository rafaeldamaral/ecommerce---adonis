'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponSchema extends Schema {
  up () {
    this.create('coupons_type', (table) => {
      table.increments()
      table.string('name', 100)
      table.string('description', 200)
      table.timestamps()

    })

    this.create('coupons', table => {
      table.increments()
      table.decimal('discount', 12, 2)
      table.integer('type_id').unsigned()
      
      table.foreign('type_id').references('id').inTable('coupons_type').onDelete('cascade')
    })
  }

  down () {
    this.drop('coupons')
    this.drop('coupons_type')
  }
}

module.exports = CouponSchema
