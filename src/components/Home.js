import React from 'react'
import { Banner } from "../components/Banner";
import  MarineCategories  from "../components/MarineCategories";
import { ShippingArea } from "../components/ShippingArea";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { BoatCleaningSection } from "../components/BoatCleaningSection";
import { PartnersBand } from "../components/PartnersBand";
import { TeakClean } from "../components/TeakClean";
import { EcoFriendly } from "../components/EcoFriendly";
import { Triton } from "../components/Triton";


export const Home = () => {
	return (
		<div>
		<Banner />
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

