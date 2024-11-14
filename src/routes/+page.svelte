<script lang="ts">
  import HeroSection from "$lib/components/hero-section.svelte";
  import WorkSection from "$lib/components/work-section.svelte";
  import ServiceSection from "$lib/components/service-section.svelte";
  import AboutSection from "$lib/components/about-section.svelte";
  import type { Media, Service } from "$lib/types";

  interface Props {
    data: {
      services: Promise<Service[]>;
      media: Promise<Media[]>;
    };
  }
  let { data }: Props = $props();
  const { services, media } = $state(data);
</script>

<main
  class="flex flex-col gap-20 sm:gap-24 md:gap-32 lg:gap-48 xl:gap-64 mb-32"
>
  <HeroSection />
  <WorkSection {media} />
  <ServiceSection {services} />
  <AboutSection />
</main>
