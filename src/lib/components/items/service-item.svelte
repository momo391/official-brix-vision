<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import type { Service } from "$lib/types";

  let { service }: { service: Service } = $props();
</script>

<Card.Root>
  <Card.Header>
    <Card.Title
      ><p
        class="font-mono text-3xl break-words text-left text-primary capitalize line-clamp-1"
      >
        <!-- {service.serviceName} -->
        ssssssssssssssssssssssss
      </p></Card.Title
    >
    <!-- <Card.Description>
      <p class="w-full font-light font-mono text-center text-primary">
        50,000 DA
      </p>
    </Card.Description> -->
  </Card.Header>
  <Card.Content>
    <p class="text-left text-muted-foreground text-sm break-words line-clamp-4">
      <!-- {service.serviceDescription} -->
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores, beatae
      illum labore minima eum dignissimos qui libero. Perspiciatis soluta harum officiis
      quibusdam repudiandae dolor illum sapiente veritatis consectetur velit.
    </p>
  </Card.Content>
  <Card.Footer>
    <p class="w-full font-light font-mono text-center text-primary">
      50,000 DA
    </p>
  </Card.Footer>
</Card.Root>
