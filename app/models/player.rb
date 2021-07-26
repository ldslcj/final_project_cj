class Player < ApplicationRecord
  belongs_to :tier
  belongs_to :team, optional: true

  def self.all_formated
    return self.all.map do |plyr|
      {
        id: plyr.id,
        name: plyr.name,
        tier_name: plyr.tier.name,
        position: plyr.position,
        win: plyr.win,
        lose: plyr.lose,
        win_rate: plyr.win_rate,
        tier_value: plyr.tier.value,
        tier_id: plyr.tier.id,
        team_id: plyr.team.try(:id),
        team_name: plyr.team.try(:name)
      }
    end
  end

end
