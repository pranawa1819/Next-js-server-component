"use client";

import Image from "next/image";
import { Card } from "../Card/Card";
import { IoIosHeartEmpty } from "react-icons/io";
import { Button } from "@/ui/button";

const dummyProducts = [
  {
    productId: 1,
    slug: "wireless-headphones",
    name: "Wireless Headphones",
    shortDescription:
      "Premium noise-cancelling wireless headphones with long battery life.",
    price: 12000,
    finalPrice: 9999,
    discountId: 1,
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      },
    ],
  },
  {
    productId: 2,
    slug: "smart-watch",
    name: "Smart Watch",
    shortDescription:
      "Track your health, workouts, and notifications in real time.",
    price: 8500,
    finalPrice: 7500,
    discountId: 2,
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      },
    ],
  },
  {
    productId: 3,
    slug: "gaming-mouse",
    name: "Gaming Mouse",
    shortDescription:
      "Ergonomic RGB gaming mouse with customizable DPI settings.",
    price: 3500,
    finalPrice: 2999,
    discountId: 3,
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1527814050087-3793815479db",
      },
    ],
  },
  {
    productId: 4,
    slug: "mechanical-keyboard",
    name: "Mechanical Keyboard",
    shortDescription:
      "Hot-swappable mechanical keyboard with tactile switches.",
    price: 7000,
    finalPrice: 7000,
    discountId: null,
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
      },
    ],
  },
  {
    productId: 5,
    slug: "bluetooth-speaker",
    name: "Bluetooth Speaker",
    shortDescription:
      "Portable speaker with deep bass and IPX7 water resistance.",
    price: 5000,
    finalPrice: 4299,
    discountId: 4,
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1589003077984-894e133dabab",
      },
    ],
  },
  {
    productId: 6,
    slug: "4k-monitor",
    name: "4K Monitor",
    shortDescription: "Ultra HD monitor with vibrant colors and slim bezels.",
    price: 35000,
    finalPrice: 31999,
    discountId: 5,
    images: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
      },
    ],
  },
  
];

export default function ProductCard() {
  return (
      <div className="grid grid-cols-4 gap-4">
        {dummyProducts.map((product) => (
          <Card key={product.productId} className="p-2">
            <div className="flex flex-col gap-2">
              <div className="w-full h-46.25 relative shrink-0">
                <Image
                  src={`${product.images[0].imageUrl}`}
                  alt={product.name}
                  fill
                  className="w-full h-full object-cover rounded-xl shrink-0"
                  unoptimized
                />
                <div className="absolute top-3 right-3 rounded-full w-6 h-6 shadow-md flex justify-center items-center cursor-pointer bg-white">
                  <IoIosHeartEmpty size={16} className="text-gray-400" />
                </div>
              </div>
              <div>{product.name}</div>
              <div>{product.shortDescription}</div>
              <div>{product.finalPrice}</div>
              <div className="flex justify-between items-center">
                <Button variant="outline">View Details</Button>
                <Button variant="secondary">Add to cart</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
  );
}
