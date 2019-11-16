# == Schema Information
#
# Table name: stops
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: routes
#
#  num         :string       not null, primary key
#  company     :string       not null, primary key
#  pos         :integer      not null, primary key
#  stop_id     :integer

require_relative './sqlzoo.rb'

def num_stops
  # How many stops are in the database?
  execute(<<-SQL)
    SELECT COUNT(stops.name)
    FROM stops
  SQL
end

def craiglockhart_id
  # Find the id value for the stop 'Craiglockhart'.
  execute(<<-SQL)
    SELECT stops.id
    FROM stops
    WHERE stops.name = 'Craiglockhart'
  SQL
end

def lrt_stops
  # Give the id and the name for the stops on the '4' 'LRT' service.
  execute(<<-SQL)
    SELECT stops.id, stops.name
    FROM routes
    JOIN stops ON routes.stop_id = stops.id
    WHERE routes.num = '4' AND routes.company = 'LRT'
  SQL
end

def connecting_routes
  # Consider the following query:
  #
  # SELECT company, num, COUNT(*)
  # FROM routes
  # WHERE stop_id = 149 OR stop_id = 53
  # GROUP BY company, num
  #
  # The query gives the number of routes that visit either London Road
  # (149) or Craiglockhart (53). Run the query and notice the two services
  # that link these stops have a count of 2. Add a HAVING clause to restrict
  # the output to these two routes.
  execute(<<-SQL)
    SELECT routes.company, routes.num, COUNT(*)
    FROM routes
    WHERE routes.stop_id = 149 OR routes.stop_id = 53
    GROUP BY routes.company, routes.num
    HAVING COUNT(*) = 2
  SQL
end

def cl_to_lr
  # Consider the query:
  #
  # SELECT a.company, a.num, a.stop_id, b.stop_id
  # FROM routes a
  # JOIN routes b ON (a.company = b.company AND a.num = b.num)
  # WHERE a.stop_id = 53
  #
  # Observe that b.stop_id gives all the places you can get to from
  # Craiglockhart, without changing routes. Change the query so that it
  # shows the services from Craiglockhart to London Road.
  execute(<<-SQL)
    SELECT r1.company, r1.num, r1.stop_id, r2.stop_id
    FROM routes r1
    JOIN routes r2 ON (r1.company = r2.company AND r1.num = r2.num)
    WHERE r1.stop_id = 53 AND r2.stop_id = 149
  SQL
end

def cl_to_lr_by_name
  # Consider the query:
  #
  # SELECT a.company, a.num, stopa.name, stopb.name
  # FROM routes a
  # JOIN routes b ON (a.company = b.company AND a.num = b.num)
  # JOIN stops stopa ON (a.stop_id = stopa.id)
  # JOIN stops stopb ON (b.stop_id = stopb.id)
  # WHERE stopa.name = 'Craiglockhart'
  #
  # The query shown is similar to the previous one, however by joining two
  # copies of the stops table we can refer to stops by name rather than by
  # number. Change the query so that the services between 'Craiglockhart' and
  # 'London Road' are shown.
  execute(<<-SQL)
    SELECT r1.company, r1.num, s1.name, s2.name
    FROM routes r1
    JOIN routes r2 ON (r1.company = r2.company AND r1.num = r2.num)
    JOIN stops s1 ON (r1.stop_id = s1.id)
    JOIN stops s2 ON (r2.stop_id = s2.id)
    WHERE s1.name = 'Craiglockhart' AND s2.name = 'London Road'
  SQL
end

def haymarket_and_leith
  # Give the company and num of the services that connect stops
  # 115 and 137 ('Haymarket' and 'Leith')
  execute(<<-SQL)
    SELECT DISTINCT r1.company, r1.num
    FROM routes r1
    JOIN routes r2 ON (r1.company = r2.company AND r1.num = r2.num)
    JOIN stops s1 ON (r1.stop_id = s1.id)
    JOIN stops s2 ON (r2.stop_id = s2.id)
    WHERE s1.name = 'Haymarket' AND s2.name = 'Leith'
  SQL
end

def craiglockhart_and_tollcross
  # Give the company and num of the services that connect stops
  # 'Craiglockhart' and 'Tollcross'
  execute(<<-SQL)
    SELECT r1.company, r1.num
    FROM routes r1
    JOIN routes r2 ON (r1.company = r2.company AND r1.num = r2.num)
    JOIN stops s1 ON (r1.stop_id = s1.id)
    JOIN stops s2 ON (r2.stop_id = s2.id)
    WHERE s1.name = 'Craiglockhart' AND s2.name = 'Tollcross'
  SQL
end

def start_at_craiglockhart
  # Give a distinct list of the stops that can be reached from 'Craiglockhart'
  # by taking one bus, including 'Craiglockhart' itself. Include the stop name,
  # as well as the company and bus no. of the relevant service.
  execute(<<-SQL)
    SELECT DISTINCT s2.name, r1.company, r1.num
    FROM routes r1
    JOIN routes r2 ON (r1.company = r2.company AND r1.num = r2.num)
    JOIN stops s1 ON (r1.stop_id = s1.id)
    JOIN stops s2 ON (r2.stop_id = s2.id)
    WHERE s1.name = 'Craiglockhart'
  SQL
end

def craiglockhart_to_sighthill
  # Find the routes involving two buses that can go from Craiglockhart to
  # Sighthill. Show the bus no. and company for the first bus, the name of the
  # stop for the transfer, and the bus no. and company for the second bus.
  execute(<<-SQL)
    SELECT DISTINCT r1.num, r1.company, s1.name, r3.num, r3.company
    FROM routes r1
    JOIN routes r2 ON (r1.company = r2.company AND r1.num = r2.num)
    JOIN stops s1 ON (r2.stop_id = s1.id)
    JOIN routes r3 ON (r3.stop_id = s1.id)
    JOIN routes r4 ON (r3.company = r4.company AND r3.num = r4.num)
    JOIN stops s2 ON r1.stop_id = s2.id
    JOIN stops s3 ON r4.stop_id = s3.id
    WHERE s2.name = 'Craiglockhart' AND s3.name = 'Sighthill'
  SQL
end