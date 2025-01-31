create schema if not exists "gis";

create extension if not exists "postgis" with schema "gis" version '3.3.7';

DO $$ 
BEGIN 
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'geometry_dump') THEN
    CREATE TYPE "gis"."geometry_dump" AS ("path" integer[], "geom" gis.geometry);
  END IF;
END $$;

DO $$ 
BEGIN 
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'valid_detail') THEN
    CREATE TYPE "gis"."valid_detail" AS ("valid" boolean, "reason" character varying, "location" gis.geometry);
  END IF;
END $$;

alter table "public"."events" add column if not exists "location_point" gis.geography(Point,4326);

CREATE INDEX IF NOT EXISTS events_geo_index ON public.events USING gist (location_point);

DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE policyname = 'Enable insert for authenticated users only' 
    AND tablename = 'events'
  ) THEN
    CREATE POLICY "Enable insert for authenticated users only"
    ON "public"."events"
    AS PERMISSIVE
    FOR INSERT
    TO authenticated
    WITH CHECK (true);
  END IF;
END $$;

