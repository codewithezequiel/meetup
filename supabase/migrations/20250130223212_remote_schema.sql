create schema if not exists "gis";

create extension if not exists "postgis" with schema "gis" version '3.3.7';

create type "gis"."geometry_dump" as ("path" integer[], "geom" gis.geometry);

create type "gis"."valid_detail" as ("valid" boolean, "reason" character varying, "location" gis.geometry);


alter table "public"."events" add column "location_point" gis.geography(Point,4326);

CREATE INDEX events_geo_index ON public.events USING gist (location_point);

create policy "Enable insert for authenticated users only"
on "public"."events"
as permissive
for insert
to authenticated
with check (true);



