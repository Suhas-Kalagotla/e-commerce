import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mens, Womens } from "@/components"; 
import { useState } from "react"; 

export default function Shopping() {
    const [isActive , setIsActive] = useState("mens"); 
    return (
    <main
      className={"flex flex-col items-center p-10 w-full"}
    >
      <Tabs defaultValue="mens" className="w-full">
        <TabsList className="w-4/5 flex p-0 m-0 w-full">
          <TabsTrigger value="mens" onClick={()=>setIsActive("mens")} className="w-1/2 relative text-xl semi-bold p-0 m-0">
            Men's Wear 
            {isActive ==="mens" && <span className="absolute -bottom-1 left-0 w-full mt-4 h-1 bg-gray-500 rounded transform translate-y-0"></span>}
          </TabsTrigger>
          <TabsTrigger value="womens" onClick={()=>setIsActive("womens")} className="w-1/2 relative text-xl font-semibold-0 p-0 m-0">
            Women's Wear 
            {isActive ==="womens" && <span className="absolute -bottom-1 left-0 w-full h-1 bg-gray-500 rounded transform translate-y-0"></span>}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="mens">
            <Mens/>
        </TabsContent>
        <TabsContent value="womens">
            <Womens/>
        </TabsContent>
      </Tabs>
    </main>
    )
}


