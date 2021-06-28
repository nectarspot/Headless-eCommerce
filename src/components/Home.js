import React, { Suspense , lazy }  from 'react'

import  MarineCategories  from "../components/MarineCategories";
import { ShippingArea } from "../components/ShippingArea";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { BoatCleaningSection } from "../components/BoatCleaningSection";
import { PartnersBand } from "../components/PartnersBand";
import { TeakClean } from "../components/TeakClean";
import { EcoFriendly } from "../components/EcoFriendly";
import { Triton } from "../components/Triton";

const Banner = lazy(() => import('../components/Banner'))


export const Home = () => {
	return (
		<div>
		<Suspense fallback={<div>Load</div>}>
		<Banner />
		</Suspense>
		<ShippingArea />
		<MarineCategories />
		<FeaturedProducts />
		<BoatCleaningSection />
		<PartnersBand />
		<TeakClean />
		<EcoFriendly />
		<Triton />
		</div>
	)
}

