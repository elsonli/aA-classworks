# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

# BONUS QUESTIONS: These problems require knowledge of aggregate
# functions. Attempt them after completing section 05.

def highest_gdp
  # Which countries have a GDP greater than every country in Europe? (Give the
  # name only. Some countries may have NULL gdp values)
  execute(<<-SQL)
    SELECT countries.name
    FROM countries
    WHERE countries.gdp > (
      SELECT MAX(countries.gdp)
      FROM countries
      WHERE countries.continent = 'Europe'
    )
  SQL
end

def largest_in_continent
  # Find the largest country (by area) in each continent. Show the continent,
  # name, and area.
  execute(<<-SQL)
  SQL
end

def large_neighbors
  # Some countries have populations more than three times that of any of their
  # neighbors (in the same continent). Give the countries and continents.
  execute(<<-SQL)
    SELECT DISTINCT countries_1.name, countries_1.continent
    FROM countries AS countries_1,
      (SELECT countries.continent AS continent_2, (SUM(countries.population) - MAX(countries.population)) AS population_2
      FROM countries
      GROUP BY countries.continent) AS countries_2
    GROUP BY countries_1.continent
    HAVING MAX(countries_1.population) > countries_2.population_2 * 3
  SQL
end
