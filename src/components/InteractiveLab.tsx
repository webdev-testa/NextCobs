"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import {
  BrainCircuit,
  Cloud,
  Server,
  Database,
  Terminal,
  Zap,
  Play,
  RotateCcw,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Search,
  Activity,
  Sliders,
  Volume2,
  Sparkles,
  Cpu,
  Layers,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function InteractiveLab() {
  const [activeTab, setActiveTab] = useState<
    "shader" | "spring" | "rag" | "cloud" | "llm" | "ratelimit" | "sql"
  >("shader");

  // ==========================================
  // MODULE 1: PROCEDURAL SHADER & WAVEFIELD (PRESERVED & EXPANDED)
  // ==========================================
  const [shaderSpeed, setShaderSpeed] = useState(1.2);
  const [shaderFrequency, setShaderFrequency] = useState(3.5);
  const [shaderPalette, setShaderPalette] = useState<"violet" | "magenta" | "orange" | "cyan">("violet");
  const shaderCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = shaderCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId: number;
    let t = 0;
    const w = (canvas.width = canvas.parentElement?.clientWidth || 500);
    const h = (canvas.height = canvas.parentElement?.clientHeight || 280);

    const render = () => {
      ctx.fillStyle = "#090909";
      ctx.fillRect(0, 0, w, h);

      const step = 8;
      for (let x = 0; x < w; x += step) {
        for (let y = 0; y < h; y += step * 2) {
          const u = (x / w) * shaderFrequency;
          const v = (y / h) * shaderFrequency;
          const val = Math.sin(u + t * shaderSpeed) * Math.cos(v + t * shaderSpeed * 0.8);
          const radius = Math.max(0.5, (val + 1) * 2.2);

          let color = "rgba(106, 76, 245, ";
          if (shaderPalette === "magenta") color = "rgba(212, 77, 240, ";
          if (shaderPalette === "orange") color = "rgba(255, 122, 61, ";
          if (shaderPalette === "cyan") color = "rgba(0, 153, 255, ";

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `${color}${Math.abs(val) * 0.8 + 0.15})`;
          ctx.fill();
        }
      }

      t += 0.02;
      frameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(frameId);
  }, [shaderSpeed, shaderFrequency, shaderPalette]);

  // ==========================================
  // MODULE 2: DRAGGABLE SPRING PHYSICS NODE (PRESERVED & EXPANDED)
  // ==========================================
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const springX = useSpring(dragX, { stiffness: 150, damping: 15 });
  const springY = useSpring(dragY, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(springY, [-100, 100], [20, -20]);
  const rotateY = useTransform(springX, [-100, 100], [-20, 20]);

  // Tactile tone generator
  const playTactileTone = (freq = 440) => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {
      // AudioContext unavailable fallback
    }
  };

  // ==========================================
  // MODULE 3: AI RAG & VECTOR SEARCH SIMULATOR
  // ==========================================
  const [vectorQuery, setVectorQuery] = useState("distributed consensus and raft");
  const knowledgeBase = [
    {
      id: "doc-1",
      title: "Raft Consensus & Leader Election",
      snippet: "Raft decomposes consensus into leader election, log replication, and safety guarantees with heartbeats.",
      category: "Distributed Systems",
      dimensions: [0.92, 0.88, 0.15, 0.45],
      tokens: 142,
    },
    {
      id: "doc-2",
      title: "Vector Embeddings & HNSW Graphs",
      snippet: "Hierarchical Navigable Small World graphs provide approximate nearest neighbor search with logarithmic scaling.",
      category: "AI Infrastructure",
      dimensions: [0.35, 0.25, 0.95, 0.88],
      tokens: 98,
    },
    {
      id: "doc-3",
      title: "B-Tree Indexing in PostgreSQL",
      snippet: "B-Tree indexes maintain sorted key entries in balanced tree blocks for O(log n) point and range lookups.",
      category: "Database Engineering",
      dimensions: [0.65, 0.72, 0.4, 0.3],
      tokens: 110,
    },
    {
      id: "doc-4",
      title: "Edge CDN Caching & Anycast Routing",
      snippet: "Anycast BGP directs client TCP packets to the nearest geographic Point of Presence for sub-10ms response.",
      category: "Cloud Networking",
      dimensions: [0.78, 0.81, 0.3, 0.6],
      tokens: 125,
    },
  ];

  const calculateSimilarity = (query: string, docDims: number[]) => {
    const qLower = query.toLowerCase();
    let score = 0.5;
    if (qLower.includes("raft") || qLower.includes("consensus")) score += docDims[0] * 0.45;
    if (qLower.includes("vector") || qLower.includes("embedding") || qLower.includes("rag")) score += docDims[2] * 0.45;
    if (qLower.includes("postgres") || qLower.includes("sql") || qLower.includes("index")) score += docDims[1] * 0.45;
    if (qLower.includes("edge") || qLower.includes("cdn") || qLower.includes("cloud")) score += docDims[3] * 0.45;
    return Math.min(0.98, Math.max(0.32, score));
  };

  // ==========================================
  // MODULE 4: CLOUD MULTI-REGION & CHAOS MESH
  // ==========================================
  const [trafficRate, setTrafficRate] = useState(12000);
  const [chaosOutage, setChaosOutage] = useState(false);
  const [edgeCacheHit, setEdgeCacheHit] = useState(true);

  const regions = [
    { id: "us-east", name: "US-East (N. Virginia)", ping: 12, health: "Healthy", traffic: 45 },
    { id: "eu-central", name: "EU-Central (Frankfurt)", ping: chaosOutage ? 999 : 24, health: chaosOutage ? "Offline (Chaos Outage)" : "Healthy", traffic: chaosOutage ? 0 : 35 },
    { id: "ap-southeast", name: "AP-Southeast (Singapore)", ping: 68, health: "Healthy", traffic: chaosOutage ? 55 : 20 },
  ];

  // ==========================================
  // MODULE 5: STREAMING LLM TOKEN VELOCITY
  // ==========================================
  const [modelPreset, setModelPreset] = useState<"claude" | "gpt4" | "llama">("claude");
  const [temperature, setTemperature] = useState(0.7);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedText, setStreamedText] = useState("");
  const [tokenCount, setTokenCount] = useState(0);
  const [showThinking, setShowThinking] = useState(true);

  const fullAIResponse =
    "To achieve sub-10ms P99 latency across distributed microservices: 1) Deploy an asynchronous gRPC or event-driven Kafka bus for inter-service RPCs, 2) Cache hot entity states in Redis with a 15-minute write-through TTL, 3) Utilize connection pooling with PgBouncer to eliminate PostgreSQL handshake overhead, and 4) Terminate TLS at the Cloudflare Edge Worker tier.";

  const startStreamingSimulation = () => {
    setIsStreaming(true);
    setStreamedText("");
    setTokenCount(0);
    const words = fullAIResponse.split(" ");
    let i = 0;
    const interval = setInterval(() => {
      if (i < words.length) {
        setStreamedText((prev) => (prev ? prev + " " + words[i] : words[i]));
        setTokenCount((prev) => prev + 1);
        i++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 45);
  };

  // ==========================================
  // MODULE 6: DISTRIBUTED TOKEN BUCKET LIMITER
  // ==========================================
  const [bucketTokens, setBucketTokens] = useState(25);
  const [maxBucket] = useState(40);
  const [rateLimitLogs, setRateLimitLogs] = useState<Array<{ id: number; status: "200 OK" | "429 Too Many Requests"; time: string }>>([
    { id: 1, status: "200 OK", time: "12:44:01" },
    { id: 2, status: "200 OK", time: "12:44:02" },
  ]);

  useEffect(() => {
    const refillInterval = setInterval(() => {
      setBucketTokens((prev) => Math.min(maxBucket, prev + 2));
    }, 1000);
    return () => clearInterval(refillInterval);
  }, [maxBucket]);

  const sendRateLimitBurst = (count: number) => {
    const now = new Date().toLocaleTimeString();
    if (bucketTokens >= count) {
      setBucketTokens((prev) => prev - count);
      setRateLimitLogs((prev) => [
        { id: Date.now(), status: "200 OK", time: now },
        ...prev.slice(0, 4),
      ]);
    } else {
      setRateLimitLogs((prev) => [
        { id: Date.now(), status: "429 Too Many Requests", time: now },
        ...prev.slice(0, 4),
      ]);
    }
  };

  // ==========================================
  // MODULE 7: SQL QUERY PLANNER & INDEX COST
  // ==========================================
  const [hasCompositeIndex, setHasCompositeIndex] = useState(false);

  return (
    <section id="lab" className="py-24 border-b border-[#262626] relative bg-[#090909]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[11px] font-mono uppercase tracking-wider text-[#999999] mb-4">
              <Terminal className="w-3.5 h-3.5 text-[#0099ff]" />
              <span>Full Stack, Cloud &amp; AI Interactive Sandbox</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.035em] font-[var(--font-outfit)]">
              Architecture &amp; Engine Lab
            </h2>
            <p className="text-sm sm:text-base text-[#999999] mt-2 max-w-2xl leading-relaxed">
              Interact with live mathematical shaders, draggable spring physics nodes, RAG vector retrieval, multi-region cloud traffic routing, streaming LLM token generation, and SQL query execution plans.
            </p>
          </div>

          {/* Module Tabs (All 7 interactable experiments) */}
          <div
            role="tablist"
            aria-label="Engineering Sandbox Modules"
            className="flex flex-wrap gap-1 p-1 bg-[#141414] border border-[#262626] rounded-full self-start md:self-auto"
          >
            {[
              { key: "shader", label: "Procedural Shaders", icon: Sparkles },
              { key: "spring", label: "Draggable Physics", icon: Cpu },
              { key: "rag", label: "Vector Search / RAG", icon: BrainCircuit },
              { key: "cloud", label: "Cloud Mesh & Chaos", icon: Cloud },
              { key: "llm", label: "Streaming LLM", icon: Zap },
              { key: "ratelimit", label: "Rate Limiter", icon: Server },
              { key: "sql", label: "SQL Optimizer", icon: Database },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  onClick={() => {
                    setActiveTab(tab.key as typeof activeTab);
                    playTactileTone(520);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none cursor-pointer",
                    activeTab === tab.key
                      ? "bg-[#1c1c1c] text-white border border-[#333333] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                      : "text-[#999999] hover:text-white"
                  )}
                >
                  <Icon className="w-3.5 h-3.5 text-[#0099ff]" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            TAB 1: PROCEDURAL SHADER & WAVEFIELD (PRESERVED)
        ======================================================== */}
        {activeTab === "shader" && (
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-8 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
              <div className="flex items-center justify-between pb-4 border-b border-[#262626] z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-xs font-mono text-white/90">
                    Mathematical Wavefield Procedural Shader Simulation
                  </span>
                </div>
                <span className="text-xs font-mono text-[#999999] bg-[#1c1c1c] px-2.5 py-1 rounded-full border border-[#262626]">
                  60 Hz Frame-Lock
                </span>
              </div>

              <div className="relative my-4 flex-1 flex items-center justify-center rounded-xl overflow-hidden border border-[#262626] bg-[#090909]">
                <canvas ref={shaderCanvasRef} className="w-full h-full min-h-[220px]" />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-mono text-white/80 border border-white/10">
                  f(u, v, t) = sin(u + t·{shaderSpeed.toFixed(1)}) · cos(v)
                </div>
              </div>

              <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-[11px] font-mono text-[#999999]">
                <span>Rendering Mode: Real-time Canvas 2D</span>
                <span className="text-[#22c55e]">Zero Layout Shift</span>
              </div>
            </div>

            {/* Shader Modulators */}
            <div className="col-span-12 lg:col-span-4 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-white font-medium text-sm mb-4">
                  <Sliders className="w-4 h-4 text-[#0099ff]" />
                  <span>Shader Parameters</span>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <label htmlFor="shader-speed-input" className="text-[#999999] cursor-pointer">
                        Velocity Multiplier
                      </label>
                      <span className="text-white font-bold">{shaderSpeed.toFixed(1)}×</span>
                    </div>
                    <input
                      id="shader-speed-input"
                      type="range"
                      min="0.2"
                      max="4.0"
                      step="0.1"
                      value={shaderSpeed}
                      onChange={(e) => setShaderSpeed(parseFloat(e.target.value))}
                      className="w-full accent-[#0099ff] bg-[#262626] rounded-lg h-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <label htmlFor="shader-freq-input" className="text-[#999999] cursor-pointer">
                        Wave Frequency
                      </label>
                      <span className="text-white font-bold">{shaderFrequency.toFixed(1)}k</span>
                    </div>
                    <input
                      id="shader-freq-input"
                      type="range"
                      min="1.0"
                      max="8.0"
                      step="0.5"
                      value={shaderFrequency}
                      onChange={(e) => setShaderFrequency(parseFloat(e.target.value))}
                      className="w-full accent-[#6a4cf5] bg-[#262626] rounded-lg h-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                    />
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-[#999999]">Color Spectrum</div>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { key: "violet", hex: "#6a4cf5", label: "Violet" },
                        { key: "magenta", hex: "#d44df0", label: "Magenta" },
                        { key: "orange", hex: "#ff7a3d", label: "Orange" },
                        { key: "cyan", hex: "#0099ff", label: "Cyan" },
                      ].map((pal) => (
                        <button
                          key={pal.key}
                          onClick={() => {
                            setShaderPalette(pal.key as typeof shaderPalette);
                            playTactileTone(600);
                          }}
                          className={cn(
                            "p-2 rounded-xl border flex flex-col items-center gap-1 transition-all focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none",
                            shaderPalette === pal.key
                              ? "bg-[#1c1c1c] border-white text-white shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                              : "bg-[#090909] border-[#262626] text-[#999999] hover:border-[#444]"
                          )}
                        >
                          <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: pal.hex }} />
                          <span className="text-[10px] font-mono">{pal.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#262626]">
                <button
                  onClick={() => {
                    setShaderSpeed(1.2);
                    setShaderFrequency(3.5);
                    setShaderPalette("violet");
                    playTactileTone(400);
                  }}
                  className="w-full py-2.5 rounded-full bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] text-xs font-medium text-white flex items-center justify-center gap-2 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Shader Defaults</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: DRAGGABLE SPRING PHYSICS NODE (PRESERVED)
        ======================================================== */}
        {activeTab === "spring" && (
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-8 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
              <div className="flex items-center justify-between pb-4 border-b border-[#262626] z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0099ff] animate-pulse" />
                  <span className="text-xs font-mono text-white/90">
                    Kinetic Spring Attraction Matrix &amp; 3D Rotation Physics
                  </span>
                </div>
                <span className="text-xs font-mono text-[#999999] bg-[#1c1c1c] px-2.5 py-1 rounded-full border border-[#262626]">
                  k=150, d=15
                </span>
              </div>

              <div className="relative my-4 flex-1 flex items-center justify-center rounded-xl border border-[#262626] bg-[#090909] p-8 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <div className="w-64 h-64 rounded-full border border-dashed border-[#0099ff]" />
                  <div className="w-32 h-32 rounded-full border border-dashed border-[#6a4cf5] absolute" />
                </div>

                <motion.div
                  drag
                  dragConstraints={{ left: -140, right: 140, top: -90, bottom: 90 }}
                  dragElastic={0.15}
                  tabIndex={0}
                  aria-label="Interactive draggable physics node"
                  style={{ x: springX, y: springY, rotateX, rotateY }}
                  onDragStart={() => playTactileTone(320)}
                  onDragEnd={() => playTactileTone(580)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-grab active:cursor-grabbing p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#141414] border border-[#0099ff]/50 shadow-[0_0_35px_rgba(0,153,255,0.25)] flex flex-col items-center justify-center gap-2 z-20 select-none focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                >
                  <Cpu className="w-9 h-9 text-[#0099ff]" />
                  <span className="font-semibold text-sm sm:text-base text-white">
                    Drag Kinetic System Node
                  </span>
                  <span className="text-[11px] font-mono text-[#999999]">
                    Viscous Damping + Gyroscopic Tilt
                  </span>
                </motion.div>
              </div>

              <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-[11px] font-mono text-[#999999]">
                <span>State Pipeline: useMotionValue + useSpring</span>
                <span className="text-[#0099ff]">Zero React Render Collapses</span>
              </div>
            </div>

            {/* Physics Controls & Audio Synthesizer */}
            <div className="col-span-12 lg:col-span-4 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-white font-medium text-sm mb-4">
                  <Volume2 className="w-4 h-4 text-[#ff7a3d]" />
                  <span>Synthesized Tactile Audio Chimes</span>
                </div>
                <p className="text-xs text-[#999999] leading-relaxed mb-5">
                  Click to trigger real-time synthesized audio tones engineered for spatial interface feedback:
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Subtle Push", freq: 260, color: "#6a4cf5" },
                    { label: "Success Affirm", freq: 520, color: "#22c55e" },
                    { label: "Token Sync", freq: 780, color: "#0099ff" },
                    { label: "Chime Harmonic", freq: 1040, color: "#ff7a3d" },
                  ].map((btn) => (
                    <button
                      key={btn.label}
                      onClick={() => playTactileTone(btn.freq)}
                      className="p-3 rounded-xl bg-[#1c1c1c] border border-[#262626] hover:border-white/40 text-xs font-medium text-white flex flex-col items-center gap-1 transition-all active:scale-95 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" style={{ color: btn.color }} />
                      <span className="text-[11px] font-mono">{btn.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090909] border border-[#262626] text-[11px] font-mono text-[#999999] space-y-1">
                <div className="flex justify-between">
                  <span>Audio Engine:</span>
                  <span className="text-white">Web Audio API</span>
                </div>
                <div className="flex justify-between">
                  <span>Waveform Type:</span>
                  <span className="text-[#22c55e]">Pure Sine Envelope</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: AI RAG & VECTOR SEARCH SIMULATOR
        ======================================================== */}
        {activeTab === "rag" && (
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-7 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/90">
                    <BrainCircuit className="w-4 h-4 text-[#6a4cf5]" />
                    <span>Hybrid Dense-Sparse Vector Retriever (Qdrant / pgvector)</span>
                  </div>
                  <span className="text-[11px] font-mono bg-[#1c1c1c] text-[#22c55e] px-2.5 py-0.5 rounded-full border border-[#262626]">
                    Cosine Similarity: 1536-dim
                  </span>
                </div>

                <div className="space-y-3">
                  <label htmlFor="rag-query-input" className="block text-xs font-mono text-[#999999]">
                    Semantic Natural Language Query
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-[#999999] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="rag-query-input"
                      type="text"
                      value={vectorQuery}
                      onChange={(e) => setVectorQuery(e.target.value)}
                      placeholder="e.g. distributed consensus and raft algorithms"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#090909] border border-[#262626] text-xs text-white placeholder-[#555] focus:border-[#0099ff] focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] font-mono text-[#777] mr-1">Quick Presets:</span>
                    {[
                      "Raft distributed consensus",
                      "Vector embeddings and HNSW",
                      "Postgres B-Tree indexes",
                      "Cloud edge CDN caching",
                    ].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setVectorQuery(preset)}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] text-[#999999] hover:text-white transition-all active:scale-95 cursor-pointer"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#090909] border border-[#262626] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#999999]">Embedding Model:</span>{" "}
                  <span className="text-white font-semibold">text-embedding-3-small</span>
                </div>
                <div>
                  <span className="text-[#999999]">Search Latency:</span>{" "}
                  <span className="text-[#22c55e] font-bold">4.8ms</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                <span className="text-xs font-mono text-white font-medium uppercase tracking-wider">
                  Retrieved Knowledge Chunks
                </span>
                <span className="text-[11px] font-mono text-[#0099ff]">Top-K: 4</span>
              </div>

              <div className="space-y-3 flex-1 overflow-y-auto max-h-[320px] no-scrollbar">
                {knowledgeBase
                  .map((doc) => ({
                    ...doc,
                    sim: calculateSimilarity(vectorQuery, doc.dimensions),
                  }))
                  .sort((a, b) => b.sim - a.sim)
                  .map((doc, idx) => (
                    <div
                      key={doc.id}
                      className={cn(
                        "p-3.5 rounded-xl border transition-all duration-200",
                        idx === 0
                          ? "bg-[#1c1c1c] border-[#6a4cf5]/60 shadow-[0_0_15px_rgba(106,76,245,0.15)]"
                          : "bg-[#090909] border-[#262626]"
                      )}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-xs text-white">{doc.title}</span>
                        <span
                          className={cn(
                            "text-[11px] font-mono font-bold px-2 py-0.5 rounded",
                            idx === 0 ? "bg-[#6a4cf5]/20 text-[#6a4cf5]" : "bg-[#1c1c1c] text-[#999999]"
                          )}
                        >
                          {(doc.sim * 100).toFixed(1)}% Match
                        </span>
                      </div>
                      <p className="text-[11px] text-[#999999] leading-relaxed line-clamp-2">
                        {doc.snippet}
                      </p>
                      <div className="mt-2 pt-2 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-[#666]">
                        <span>{doc.category}</span>
                        <span>{doc.tokens} Tokens</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 4: CLOUD MULTI-REGION & CHAOS MESH
        ======================================================== */}
        {activeTab === "cloud" && (
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-8 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/90">
                    <Cloud className="w-4 h-4 text-[#ff7a3d]" />
                    <span>Global Multi-Region Edge Mesh (Anycast / Cloudflare / K8s)</span>
                  </div>
                  <span className="text-[11px] font-mono bg-[#1c1c1c] text-white px-2.5 py-0.5 rounded-full border border-[#262626]">
                    280+ Edge POPs
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {regions.map((reg) => (
                    <div
                      key={reg.id}
                      className={cn(
                        "p-4 rounded-2xl border transition-all duration-300",
                        reg.health.includes("Offline")
                          ? "bg-[#380f00]/30 border-[#ff5577] shadow-[0_0_20px_rgba(255,85,119,0.2)]"
                          : "bg-[#090909] border-[#262626]"
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white">{reg.name}</span>
                        <span
                          className={cn(
                            "w-2.5 h-2.5 rounded-full",
                            reg.health.includes("Offline") ? "bg-[#ff5577] animate-ping" : "bg-[#22c55e]"
                          )}
                        />
                      </div>
                      <div className="text-xl font-bold font-mono text-white mb-1">
                        {reg.health.includes("Offline") ? "OUTAGE" : `${reg.ping}ms`}
                      </div>
                      <div className="text-[11px] font-mono text-[#999999] flex justify-between">
                        <span>Allocated Traffic:</span>
                        <span className="text-white font-semibold">{reg.traffic}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 p-4 rounded-2xl bg-[#090909] border border-[#262626]">
                  <div className="flex justify-between text-xs font-mono">
                    <label htmlFor="cloud-traffic-slider-2" className="text-[#999999]">
                      Ingress Traffic Inflow
                    </label>
                    <span className="text-white font-bold">{trafficRate.toLocaleString()} req/s</span>
                  </div>
                  <input
                    id="cloud-traffic-slider-2"
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={trafficRate}
                    onChange={(e) => setTrafficRate(parseInt(e.target.value))}
                    className="w-full accent-[#ff7a3d] bg-[#262626] rounded-lg h-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#999999] pt-2">
                <span>Auto-Healing Failover: &lt;14ms</span>
                <span className="text-[#22c55e]">0.00% Packet Loss</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-white font-medium text-sm mb-4">
                  <ShieldAlert className="w-4 h-4 text-[#ff5577]" />
                  <span>Chaos Engineering Injector</span>
                </div>

                <p className="text-xs text-[#999999] leading-relaxed mb-6">
                  Simulate instantaneous multi-datacenter blackout to verify automated BGP route withdrawal and Anycast traffic failover.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => setChaosOutage(!chaosOutage)}
                    className={cn(
                      "w-full py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none",
                      chaosOutage
                        ? "bg-[#22c55e] text-black shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                        : "bg-[#ff5577] text-white shadow-[0_0_20px_rgba(255,85,119,0.3)] hover:bg-[#ff5577]/90"
                    )}
                  >
                    {chaosOutage ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Restore Frankfurt Cluster</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4" />
                        <span>Inject Datacenter Outage</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setEdgeCacheHit(!edgeCacheHit)}
                    className="w-full py-2.5 rounded-full bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] text-xs font-medium text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Cache State: {edgeCacheHit ? "Edge Warm (2.1ms)" : "Cold Origin (48ms)"}</span>
                  </button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090909] border border-[#262626] text-[11px] font-mono text-[#999999] space-y-1">
                <div className="flex justify-between">
                  <span>Routing Protocol:</span>
                  <span className="text-white">BGP Anycast / Rust Wasm</span>
                </div>
                <div className="flex justify-between">
                  <span>Failover Strategy:</span>
                  <span className="text-[#22c55e]">Dynamic Weighted Round-Robin</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 5: STREAMING LLM TOKEN VELOCITY ENGINE
        ======================================================== */}
        {activeTab === "llm" && (
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-8 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/90">
                    <Zap className="w-4 h-4 text-[#d44df0]" />
                    <span>Real-time SSE Stream &amp; TTFT Telemetry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono bg-[#1c1c1c] text-[#d44df0] px-2.5 py-0.5 rounded-full border border-[#262626]">
                      {modelPreset === "claude" ? "Claude 3.5 Sonnet" : modelPreset === "gpt4" ? "GPT-4o" : "Llama 3.3 70B"}
                    </span>
                  </div>
                </div>

                <div className="min-h-[180px] p-5 rounded-2xl bg-[#090909] border border-[#262626] font-mono text-xs text-white/90 leading-relaxed relative flex flex-col justify-between">
                  <div>
                    {showThinking && (
                      <div className="text-[#6a4cf5] text-[11px] mb-3 pb-2 border-b border-[#262626] flex items-center gap-1.5">
                        <BrainCircuit className="w-3.5 h-3.5" />
                        <span>[Thinking process: analyzing microservice P99 distributed bottlenecks...]</span>
                      </div>
                    )}
                    <p className="text-white">
                      {streamedText || (
                        <span className="text-[#555]">Click &quot;Stream Prompt Execution&quot; to test real-time LLM token velocity...</span>
                      )}
                      {isStreaming && <span className="inline-block w-2 h-4 bg-[#0099ff] ml-1 animate-pulse" />}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-[11px] font-mono text-[#999999]">
                    <span>Tokens Streamed: {tokenCount} tok</span>
                    <span className="text-[#22c55e]">Velocity: ~92 tok/s</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={startStreamingSimulation}
                  disabled={isStreaming}
                  className="px-6 py-2.5 rounded-full bg-white hover:bg-white/90 disabled:opacity-50 text-black text-xs font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isStreaming ? "Streaming Tokens..." : "Stream Prompt Execution"}</span>
                </button>

                <div className="flex items-center gap-2">
                  <label htmlFor="chain-thought-check" className="text-xs font-mono text-[#999999] cursor-pointer">
                    Show Chain-of-Thought:
                  </label>
                  <input
                    id="chain-thought-check"
                    type="checkbox"
                    checked={showThinking}
                    onChange={(e) => setShowThinking(e.target.checked)}
                    className="accent-[#0099ff] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-white font-medium text-sm mb-4">
                  <Sliders className="w-4 h-4 text-[#0099ff]" />
                  <span>Inference Parameters</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="block text-xs font-mono text-[#999999] mb-2">Foundation Model</span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { key: "claude", label: "Claude 3.5" },
                        { key: "gpt4", label: "GPT-4o" },
                        { key: "llama", label: "Llama 3" },
                      ].map((m) => (
                        <button
                          key={m.key}
                          onClick={() => setModelPreset(m.key as typeof modelPreset)}
                          className={cn(
                            "py-2 rounded-xl text-xs font-mono border transition-all cursor-pointer",
                            modelPreset === m.key
                              ? "bg-[#1c1c1c] text-white border-[#0099ff] shadow-[0_0_12px_rgba(0,153,255,0.2)]"
                              : "bg-[#090909] text-[#999999] border-[#262626]"
                          )}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <label htmlFor="temp-slider-2" className="text-[#999999]">
                        Temperature (Sampling)
                      </label>
                      <span className="text-white font-bold">{temperature.toFixed(2)}</span>
                    </div>
                    <input
                      id="temp-slider-2"
                      type="range"
                      min="0.0"
                      max="1.5"
                      step="0.05"
                      value={temperature}
                      onChange={(e) => setTemperature(parseFloat(e.target.value))}
                      className="w-full accent-[#d44df0] bg-[#262626] rounded-lg h-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#090909] border border-[#262626] text-[11px] font-mono text-[#999999] space-y-1">
                <div className="flex justify-between">
                  <span>TTFT (Time to 1st Token):</span>
                  <span className="text-[#22c55e]">142ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Semantic Cache:</span>
                  <span className="text-white">Active (Redis)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 6: DISTRIBUTED TOKEN-BUCKET RATE LIMITER
        ======================================================== */}
        {activeTab === "ratelimit" && (
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-7 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/90">
                    <Server className="w-4 h-4 text-[#22c55e]" />
                    <span>Sliding Window Token Bucket Algorithm (Redis / Upstash)</span>
                  </div>
                  <span className="text-[11px] font-mono bg-[#1c1c1c] text-white px-2.5 py-0.5 rounded-full border border-[#262626]">
                    Refill: +2 tok/s
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-[#090909] border border-[#262626] flex flex-col items-center justify-center space-y-4">
                  <div className="text-xs font-mono text-[#999999]">Available Token Reservoir</div>
                  <div className="text-4xl font-bold font-mono text-white">
                    {bucketTokens} <span className="text-lg text-[#666]">/ {maxBucket}</span>
                  </div>

                  <div className="grid grid-cols-10 gap-1.5 w-full max-w-md">
                    {Array.from({ length: maxBucket }).map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-5 rounded transition-all duration-300",
                          i < bucketTokens ? "bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-[#1c1c1c] opacity-30"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={() => sendRateLimitBurst(1)}
                  className="px-4 py-2 rounded-full bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] text-xs font-mono text-white transition-all active:scale-95 cursor-pointer"
                >
                  +1 Request
                </button>
                <button
                  onClick={() => sendRateLimitBurst(10)}
                  className="px-4 py-2 rounded-full bg-[#1c1c1c] hover:bg-[#262626] border border-[#262626] text-xs font-mono text-white transition-all active:scale-95 cursor-pointer"
                >
                  +10 Burst
                </button>
                <button
                  onClick={() => sendRateLimitBurst(30)}
                  className="px-4 py-2 rounded-full bg-[#ff5577]/20 hover:bg-[#ff5577]/30 border border-[#ff5577]/50 text-xs font-mono text-[#ff5577] transition-all active:scale-95 cursor-pointer"
                >
                  +30 Spike (Stress Test)
                </button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                <span className="text-xs font-mono text-white font-medium uppercase tracking-wider">
                  Ingress Decision Logs
                </span>
                <span className="text-[11px] font-mono text-[#22c55e]">Live Interceptor</span>
              </div>

              <div className="space-y-2 flex-1 font-mono text-xs">
                {rateLimitLogs.map((log) => (
                  <div
                    key={log.id}
                    className={cn(
                      "p-3 rounded-xl border flex items-center justify-between",
                      log.status === "200 OK"
                        ? "bg-[#090909] border-[#262626] text-white"
                        : "bg-[#380f00]/30 border-[#ff5577] text-[#ff5577]"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className={log.status === "200 OK" ? "text-[#22c55e]" : "text-[#ff5577]"}>
                        {log.status === "200 OK" ? "✓" : "✕"}
                      </span>
                      <span>POST /api/v1/query</span>
                    </div>
                    <span className="text-[11px] text-[#999999]">{log.status}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#262626] text-[11px] font-mono text-[#999999] flex justify-between">
                <span>Backend Store: Redis In-Memory</span>
                <span>Algorithm: Token Bucket</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 7: SQL QUERY PLANNER & INDEX COST OPTIMIZER
        ======================================================== */}
        {activeTab === "sql" && (
          <div className="grid grid-cols-12 gap-6 items-stretch">
            <div className="col-span-12 lg:col-span-7 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/90">
                    <Database className="w-4 h-4 text-[#0099ff]" />
                    <span>PostgreSQL Query Planner &amp; EXPLAIN ANALYZE Cost</span>
                  </div>
                  <span className="text-[11px] font-mono bg-[#1c1c1c] text-white px-2.5 py-0.5 rounded-full border border-[#262626]">
                    Table: 10,000,000 Rows
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#090909] border border-[#262626] font-mono text-xs text-white space-y-2 mb-4">
                  <div className="text-[#999999] text-[11px]">-- Execution Query:</div>
                  <div className="text-[#0099ff]">
                    SELECT id, user_id, status, created_at FROM transactions
                  </div>
                  <div className="text-white">
                    WHERE organization_id = &apos;org_9281&apos; AND status = &apos;completed&apos;
                  </div>
                  <div className="text-[#999999]">ORDER BY created_at DESC LIMIT 50;</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#1c1c1c] border border-[#262626] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Composite B-Tree Index</div>
                    <div className="text-[11px] font-mono text-[#999999]">
                      CREATE INDEX ON transactions (organization_id, status, created_at DESC);
                    </div>
                  </div>
                  <button
                    onClick={() => setHasCompositeIndex(!hasCompositeIndex)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-semibold transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0099ff] focus-visible:outline-none",
                      hasCompositeIndex
                        ? "bg-[#22c55e] text-black shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                        : "bg-white text-black hover:bg-white/90"
                    )}
                  >
                    {hasCompositeIndex ? "Index Active (Optimized)" : "+ Add Composite Index"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#999999]">
                <span>Engine: PostgreSQL 16 + pgvector</span>
                <span className="text-[#22c55e]">Storage: NVMe Tier-1</span>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 rounded-[24px] bg-[#141414] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                <span className="text-xs font-mono text-white font-medium uppercase tracking-wider">
                  EXPLAIN ANALYZE Breakdown
                </span>
                <span
                  className={cn(
                    "text-[11px] font-mono font-bold px-2 py-0.5 rounded",
                    hasCompositeIndex ? "bg-[#22c55e]/20 text-[#22c55e]" : "bg-[#ff5577]/20 text-[#ff5577]"
                  )}
                >
                  {hasCompositeIndex ? "Index Scan" : "Seq Scan (Slow)"}
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#090909] border border-[#262626] space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#999999]">Execution Time:</span>
                    <span className={cn("font-bold", hasCompositeIndex ? "text-[#22c55e]" : "text-[#ff5577]")}>
                      {hasCompositeIndex ? "0.42 ms" : "382.15 ms (900× Slower)"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#999999]">Total Planner Cost:</span>
                    <span className="text-white font-semibold">
                      {hasCompositeIndex ? "8.45" : "184,210.00"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#999999]">Rows Filtered / Scanned:</span>
                    <span className="text-white">
                      {hasCompositeIndex ? "50 rows" : "10,000,000 rows (Disk thrash)"}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#090909] border border-[#262626] text-[11px] text-[#999999] leading-relaxed">
                  {hasCompositeIndex ? (
                    <span className="text-[#22c55e]">
                      ✓ High-performance index scan. Zero buffer thrashing, direct B-Tree leaf node seek.
                    </span>
                  ) : (
                    <span className="text-[#ff5577]">
                      ⚠ Sequential table scan across all 10M rows. Severe disk I/O bottleneck without index.
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-[#262626] text-[11px] font-mono text-[#999999] flex justify-between">
                <span>Optimizer Gain:</span>
                <span className="text-white font-bold">{hasCompositeIndex ? "99.8% Cost Saved" : "Unindexed"}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
