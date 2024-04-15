import { Quicksand } from "next/font/google";
import { Lora } from "next/font/google";
import { Kanit } from "next/font/google";
import { Ubuntu } from "next/font/google";

export const quicksand = Quicksand({weight: "700", subsets: ['latin']});
export const lora = Lora({weight: "700", subsets: ['latin']});
export const kanit = Kanit({weight: "700", subsets: ['latin']});
export const ubuntu = Ubuntu({weight: "700", subsets: ['latin'], style: ['italic']});