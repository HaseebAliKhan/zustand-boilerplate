"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useBearStore from "../../hooks/store"





export default function CardWithForm() {

  const bearCount= useBearStore((state) => state.bears)
  const bearIncreaseCount= useBearStore((state) => state.increasePopulation)
  const bearRemove= useBearStore((state) => state.removeAllBears)

  return (
    <div className="justify-center flex pt-40 bg-slate-950 h-svh">

    <Card className="w-[350px] h-[150px] ">
      <CardHeader>
        <CardTitle className="justify-center flex">All Bears: {bearCount}</CardTitle>
        
      </CardHeader>
      <CardContent>
        <Label>
          <span className="text-lg"></span>
        </Label>
       
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={bearRemove}>Remove Bears</Button>
        <Button onClick={bearIncreaseCount}>Increase Bears</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
