"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Sprout, Thermometer, Droplets, FlaskConical, CloudRain, Leaf, TrendingUp } from "lucide-react"

interface CropRequest {
  N: number
  P: number
  K: number
  temperature: number
  humidity: number
  ph: number
  rainfall: number
}

interface CropResponse {
  prediction: string
}

type CropName =
  | 'apple'
  | 'banana'
  | 'blackgram'
  | 'chickpea'
  | 'coconut'
  | 'coffee'
  | 'cotton'
  | 'grapes'
  | 'jute'
  | 'kidneybeans'
  | 'lentil'
  | 'maize'
  | 'mango'
  | 'mothbeans'
  | 'mungbean'
  | 'muskmelon'
  | 'orange'
  | 'papaya'
  | 'pigeonpeas'
  | 'pomegranate'
  | 'rice'
  | 'watermelon';



export default function CropTop() {
  const [formData, setFormData] = useState<CropRequest>({
    N: 0,
    P: 0,
    K: 0,
    temperature: 0,
    humidity: 0,
    ph: 0,
    rainfall: 0,
  })
  const [prediction, setPrediction] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")

  const handleInputChange = (field: keyof CropRequest, value: string) => {
    const numValue = Number.parseFloat(value) || 0
    setFormData((prev) => ({ ...prev, [field]: numValue }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setPrediction("")

    try {
      const response = await fetch("https://crop-rec-api-idup.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data: CropResponse = await response.json()
        setPrediction(data.prediction)
      } else {
        setError(`Server error: ${response.status}`)
      }
    } catch (err) {
      setError("Network error: Unable to connect to the server")
    } finally {
      setLoading(false)
    }
  }
  
  type CropName =
    | 'apple' | 'banana' | 'blackgram' | 'chickpea' | 'coconut'
    | 'coffee' | 'cotton' | 'grapes' | 'jute' | 'kidneybeans'
    | 'lentil' | 'maize' | 'mango' | 'mothbeans' | 'mungbean'
    | 'muskmelon' | 'orange' | 'papaya' | 'pigeonpeas'
    | 'pomegranate' | 'rice' | 'watermelon';

  const cropImages = {
  apple: "https://www.shutterstock.com/image-photo/autumn-day-rural-garden-frame-600nw-1798373137.jpg",
  banana: "https://kj1bcdn.b-cdn.net/media/53160/banana-farming-2.jpg",
  blackgram: "https://www.shutterstock.com/image-photo/closeup-green-gram-plant-numerous-600nw-2535202103.jpg",
  chickpea: "https://media.istockphoto.com/id/638538708/photo/woman-showing-chickpeas-in-close-up.jpg?s=612x612&w=0&k=20&c=ZAZ-5i5KuuteCEOZrrwQ3S30yh-ptUVwZ752-LG90cg=",
  coconut: "https://www.croptrust.org/fileadmin/uploads/croptrust/Photos/Crops/Coconut.jpeg",
  
  coffee: "https://www.aboutcoffee.org/wp-content/uploads/2024/10/ripe-coffee-cherries-on-branch-of-coffee-tree.jpg",
  cotton: "https://static.vecteezy.com/system/resources/thumbnails/046/349/194/small_2x/calming-ready-to-harvest-cotton-landscapes-for-web-use-free-photo.jpeg",
  grapes: "https://www.apnikheti.com/upload/crops/1850idea99grapes.jpg",
  jute: "https://krishipathshala.in/wp-content/uploads/2020/08/JUTE-CULTIVATION-IN-SOUTHDINAJPUR-converted-1024x582.jpg",
  kidneybeans: "https://i0.wp.com/dbsfarmwilson.com/wp-content/uploads/2023/10/kidney-beans-2.jpg?resize=1024%2C768&ssl=1",
  
  lentil: "https://media.istockphoto.com/id/186745672/photo/green-snow-pea.jpg?s=612x612&w=0&k=20&c=IVtzJ7AfhjpkG32HICKRTfzDzp22Az18vogoOiFPG0U=",
  maize: "https://www.protectourlivelihood.in/wp-content/uploads/2025/05/Image-Maize.jpg",
  mango: "https://img.khetivyapar.com/images/blogs/1707976811-how-to-do-mango-farming-know-the-advanced-varieties-of-mango.jpg",
  mothbeans: "https://www.feedipedia.org/sites/default/files/images/Vigna-aconitifolia_leaves%26flowers-MJussoorie%20Chakrata%20road%20near%20Bharatkhai-1-DSC09876.jpg",
  mungbean: "https://www.pulseaus.com.au/storage/app/uploads/public/569/9e6/01b/5699e601bbbe8831660831.jpg",
  
  muskmelon: "https://rukminim3.flixcart.com/image/850/1000/kkec4280/plant-seed/p/h/c/10-pmb1002-pmb-original-imafzrcxxuewngfz.jpeg?q=20&crop=false",
  orange: "https://www.apnikheti.com/upload/crops/4257idea99oranges-on-citrus-tree.jpg",
  papaya: "https://cdn.wikifarmer.com/images/detailed/2023/10/Harvest-yield-1.png",
  pigeonpeas: "https://gumlet.assettype.com/down-to-earth%2Fimport%2Flibrary%2Flarge%2F2024-02-21%2F0.84137300_1708517707_istock-1211157883.jpg?w=480&auto=format%2Ccompress&fit=max",
  pomegranate: "https://agricultureguruji.com/wp-content/uploads/2018/10/Pomegranate-harvesting.jpg",
  
  rice: "https://cdn.britannica.com/89/140889-050-EC3F00BF/Ripening-heads-rice-Oryza-sativa.jpg",
  watermelon: "https://www.haifa-group.com/sites/default/files/crop/sandias-caparros-premium1.jpg",
  };

  const cropKey = prediction?.toLowerCase() as CropName;
  const cropImage = cropImages[cropKey];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
              <img src="https://img.pikbest.com/png-images/20241029/an-agriculture-logo-sun-and-crops-icon_11024322.png!sw800" alt="CropTop Logo" className="h-12 w-12" />
            <h1 className="text-4xl font-bold text-slate-800">
              CropTop<span className="align-super text-xs ml-1 font-bold text-gray-500">TM</span>
            </h1>
          </div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Advanced crop recommendation system that analyzes soil and environmental conditions to suggest the optimal
            crop for maximum yield.
            </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2">
          {/* Input Form */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-slate-800 flex items-center gap-2">
                <FlaskConical className="h-6 w-6 text-emerald-600" />
                Soil & Environmental Analysis
              </CardTitle>
              <CardDescription className="text-slate-600">
                Enter the soil nutrient levels and environmental conditions for accurate crop recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nutrient Levels */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                    Nutrient Levels (mg/kg)
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="nitrogen" className="text-slate-700 font-medium">
                        Nitrogen (N)
                      </Label>
                      <Input
                        id="nitrogen"
                        type="number"
                        step="0.1"
                        placeholder="0.0"
                        className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        onChange={(e) => handleInputChange("N", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phosphorus" className="text-slate-700 font-medium">
                        Phosphorus (P)
                      </Label>
                      <Input
                        id="phosphorus"
                        type="number"
                        step="0.1"
                        placeholder="0.0"
                        className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        onChange={(e) => handleInputChange("P", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="potassium" className="text-slate-700 font-medium">
                        Potassium (K)
                      </Label>
                      <Input
                        id="potassium"
                        type="number"
                        step="0.1"
                        placeholder="0.0"
                        className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        onChange={(e) => handleInputChange("K", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Environmental Conditions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                    Environmental Conditions
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="temperature" className="text-slate-700 font-medium flex items-center gap-2">
                        <Thermometer className="h-4 w-4" />
                        Temperature (°C)
                      </Label>
                      <Input
                        id="temperature"
                        type="number"
                        step="0.1"
                        placeholder="0.0"
                        className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        onChange={(e) => handleInputChange("temperature", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="humidity" className="text-slate-700 font-medium flex items-center gap-2">
                        <Droplets className="h-4 w-4" />
                        Humidity (%)
                      </Label>
                      <Input
                        id="humidity"
                        type="number"
                        step="0.1"
                        placeholder="0.0"
                        className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        onChange={(e) => handleInputChange("humidity", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ph" className="text-slate-700 font-medium flex items-center gap-2">
                        <FlaskConical className="h-4 w-4" />
                        pH Level
                      </Label>
                      <Input
                        id="ph"
                        type="number"
                        step="0.1"
                        placeholder="0.0"
                        className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        onChange={(e) => handleInputChange("ph", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rainfall" className="text-slate-700 font-medium flex items-center gap-2">
                        <CloudRain className="h-4 w-4" />
                        Rainfall (mm)
                      </Label>
                      <Input
                        id="rainfall"
                        type="number"
                        step="0.1"
                        placeholder="0.0"
                        className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                        onChange={(e) => handleInputChange("rainfall", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-semibold"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Analyzing Conditions...
                    </>
                  ) : (
                    <>
                      <Sprout className="mr-2 h-5 w-5" />
                      Get Crop Recommendation
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {prediction && cropImage && (
              <Card className="shadow-lg border-0 bg-white p-4 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                  <Sprout className="h-6 w-6 text-green-600" />
                  Recommended Crop
                </CardTitle>
              </CardHeader>
              <CardContent>
                  <img
                    src={cropImage}
                    alt={prediction}
                    className="w-full h-auto mb-4 rounded-lg shadow-md"
                  />
                  <h3 className="text-2xl font-bold text-emerald-800 mb-2 text-center">
                    {prediction}
                  </h3>
                  <p className="text-gray-700 text-sm text-center">
                    Based on your soil and environmental conditions, this crop is predicted to yield the best results.
                  </p>
              </CardContent>
              </Card>
            )}

            {error && (
              <Card className="shadow-lg border-0 bg-gradient-to-br from-red-50 to-rose-50">
                <CardContent className="pt-6">
                  <div className="text-center py-4">
                    <div className="text-red-600 mb-2">
                      <FlaskConical className="h-8 w-8 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Analysis Error</h3>
                    <p className="text-red-700">{error}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {!prediction && !error && !loading && (
              <Card className="shadow-lg border-0 bg-gradient-to-br from-slate-50 to-stone-50">
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <div className="text-slate-400 mb-4">
                      <Sprout className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-600 mb-2">Ready for Analysis</h3>
                    <p className="text-slate-500">
                      Enter your soil and environmental data to receive a personalized crop recommendation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
