import BestTimeToVisit from "@/components/destinations/BestTimeToVisit";
import DestinationCTA from "@/components/destinations/DestinationCTA";
import DestinationFAQ from "@/components/destinations/DestinationFAQ";
import DestinationHero from "@/components/destinations/DestinationHero";
import SignatureDestinations from "@/components/destinations/SignatureDestinations";




export default function Destination() {
  return (
    <>
    <DestinationHero />
    <SignatureDestinations />
    <BestTimeToVisit />
    <DestinationFAQ />
    <DestinationCTA />
   

    </>
  );
}
