# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# Cat.destroy_all

#   # p1 = Position.create(name:'Top')
#   # p2 = Position.create(name:'Jungle')
#   # p3 = Position.create(name:'Mid')
#   # p4 = Position.create(name:'ADC')
#   # p5 = Position.create(name:'Support')
#   Player.create(name:'CJ', tier:'Bronze 1', win:30, lose:40)

# puts('seeded')

Tier.destroy_all
Team.destroy_all
Player.destroy_all

Tier.create(name:'Bronze', value: 0.5, image: File.open(Rails.root.join('client/public/images/Bronze.png')))
Tier.create(name:'Silver 4', value: 0.7, image: File.open(Rails.root.join('client/public/images/Silver.png')))
t1 = Tier.create(name:'Silver 3', value: 0.8, image: File.open(Rails.root.join('client/public/images/Silver.png')))
Tier.create(name:'Silver 2', value: 0.9, image: File.open(Rails.root.join('client/public/images/Silver.png')))
Tier.create(name:'Silver 1', value: 1.0, image: File.open(Rails.root.join('client/public/images/Silver.png')))
Tier.create(name:'Gold 4', value: 1.2, image: File.open(Rails.root.join('client/public/images/Gold.png')))
Tier.create(name:'Gold 3', value: 1.3, image: File.open(Rails.root.join('client/public/images/Gold.png')))
Tier.create(name:'Gold 2', value: 1.4, image: File.open(Rails.root.join('client/public/images/Gold.png')))
Tier.create(name:'Gold 1', value: 1.5, image: File.open(Rails.root.join('client/public/images/Gold.png')))
Tier.create(name:'Platinum', value: 2.0, image: File.open(Rails.root.join('client/public/images/Platinum.png')))


k1 = Team.create(name:'Team 1')
Team.create(name:'Team 2')

# Player.create(name:'CJ', position:'Jungle', win:20, lose:20, win_rate:30.0, tier_id: t1.id, team_id: k1.id)
Player.create(name:'Hyun', position:'Mid', win:20, lose:20, win_rate:30.0, tier_id: 3, team_id: 2)
puts('seeded')