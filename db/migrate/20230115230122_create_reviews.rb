class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :review
      t.integer :user_id
      t.integer :baked_good_id

      t.timestamps
    end
  end
end
