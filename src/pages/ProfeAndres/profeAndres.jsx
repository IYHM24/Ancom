import React, { useMemo } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { FaPlay, FaClock, FaCalendar, FaSearch, FaCross  } from 'react-icons/fa'
import { Mantenimiento } from '@/components/shared/mantenimiento/mantenimiento'
import { useEffect, useState } from 'react'
import { getContent, getStatics } from '@/services/youtubeController/youtubeService.service'
import { Section } from '@/components/shared/seccion/section'

export const ProfeAndres = () => {

  const mantenimiento = true;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_CHANEL_ID = import.meta.env.VITE_API_CHANEL_ID

  const [contenido, setContenido] = useState();
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetchData();
  }, [])

  const filteredVideos = useMemo(() => {
    return contenido && contenido.filter((video) => {
      const matchesSearch =
        searchQuery === "" ||
        video.snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.snippet.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesSearch
    })
  }, [searchQuery])

  const fetchData = async () => {
    //Obtenemos los Id de los videos
    let videos = [];
    const response = await getContent({
      part: "snippet,contentDetails,statistics",
      channelId: "UC" + API_CHANEL_ID,
      maxResults: 10,
      order: "date",
      type: "video",
      key: API_KEY
    });
    videos = response && [...videos, ...response.items];
    //Obtenemos estadisticas
    /* videos && videos.map(async v =>{
      const responseStatics = await getStatics({
        part: "contentDetails,statistics",
        id: v.id.videoId,
        key: API_KEY
      });
      const {duration} =  responseStatics.items.contentDetails;
      const {viewCount} =  responseStatics.items.statistics;
      v.statics = {
        duration, 
        viewCount
      }
    }) */
    setContenido(videos);
  }


  return (
    <>
    { !mantenimiento? 
    <Section>
      <div className="max-w-7xl !mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="!text-center !mb-12"
        >
          <h2 className="!text-4xl !font-bold !mb-4">Profe Andres</h2>
          <p className="text-gray-600 !max-w-2xl !mx-auto">
            Tutoriales y contenido educativo sobre desarrollo web, inteligencia artificial y más.
          </p>
        </motion.div>

        {/* Search and Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="!mb-12 !space-y-6"
        >
          {/* Search Bar */}
          <div className="!max-w-2xl !mx-auto">
            <div className="!relative">
              <input
                type="text"
                placeholder="Buscar videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full !px-6 !py-4 bg-white rounded-full !shadow-lg !pl-14 !pr-12 focus:!outline-none focus:!ring-2 focus:!ring-purple-500"
              />
              <FaSearch className="absolute !left-5 !top-1/2 !transform !-translate-y-1/2 !text-gray-400 !w-5 !h-5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="!absolute !right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaCross className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Search Results Info */}
        {searchQuery && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="!text-center !mb-8 !text-gray-600">
            Se encontraron {filteredVideos && filteredVideos.length} resultados para "{searchQuery}"
          </motion.div>
        )}

        {/* Video Grid */}
        <AnimatePresence mode="wait">
          {filteredVideos && filteredVideos.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={"indice-video-"+index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  {/* Video Card */}
                  <div className="bg-white !rounded-2xl !shadow-xl !overflow-hidden hover:!shadow-2xl !transition-shadow">
                    {/* Thumbnail */}
                    <div className="!relative !aspect-video">
                      <img
                        src={video.snippet.thumbnails.default.url || "/placeholder.svg"}
                        alt={video.snippet.title}
                        className="!w-full !h-full !object-cover"
                      />
                      <div className="!absolute !inset-0 !bg-black/50 !opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="!w-16 !h-16 rounded-full bg-white/90 flex items-center justify-center"
                        >
                          <FaPlay className="!w-8 !h-8 text-purple-500 !ml-1" />
                        </motion.div>
                      </div>
                      {/* Duration */}
                      <div className="!absolute !bottom-2 !right-2 !px-2 !py-1 bg-black/70 rounded-md text-white text-sm flex items-center gap-1">
                        <FaClock className="w-4 h-4" />
                        {video.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-purple-500 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.snippet.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <FaCalendar className="w-4 h-4" />
                          {new Date(video.snippet.publishedAt).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                       {/*  <div>{video.views} visualizaciones</div> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">No se encontraron videos que coincidan con tu búsqueda.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button */}
        {filteredVideos && filteredVideos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors flex items-center gap-2 mx-auto">
              Cargar Más Videos
              <FaPlay className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
      
    </Section> :  <Mantenimiento pagina={"canal"} />}
    </>
  )
}

