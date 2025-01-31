set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.nearby_events(lat double precision, long double precision)
 RETURNS TABLE(id bigint, created_at timestamp with time zone, title text, description text, date timestamp with time zone, location text, image_uri text, user_id uuid, lat double precision, long double precision, dist_meters double precision)
 LANGUAGE sql
 SET search_path TO ''
AS $function$
  select id, created_at, title, description, date, location, image_uri, user_id, gis.st_y(location_point::gis.geometry) as lat, gis.st_x(location_point::gis.geometry) as long, gis.st_distance(location_point, gis.st_point(long, lat)::gis.geography) as dist_meters
  from public.events
  order by location_point operator(gis.<->) gis.st_point(long, lat)::gis.geography;
$function$
;


