'use client'

import { 
  ArrowRight, 
  FileText, 
  GitBranch, 
  Brain, 
  Search, 
  MessageSquare, 
  Eye, 
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Database,
  Code2,
  Shield,
  Activity,
  Layers
} from 'lucide-react'
import { useEffect, useState } from 'react'

function AIReasoningWindow() {
  const [phase, setPhase] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => (p + 1) % 4)
    }, 6000)
    return () => clearInterval(interval)
  }, [])
  
  const requirements = [
    {
      id: 'REQ-AUTH-001',
      context: 'User authentication via OAuth 2.0 with token-based session management',
      evidence: ['auth/oauth_provider.py:45-78', 'middleware/auth.py:12-34'],
      reasoning: 'OAuth2Provider class implements full authorization code flow. Token validation middleware handles JWT verification.',
      confidence: 0.98,
      status: 'Fully Implemented'
    },
    {
      id: 'REQ-DATA-015',
      context: 'Real-time data validation pipeline with schema enforcement',
      evidence: ['validators.py:89-120'],
      reasoning: 'Schema validation present but async pipeline components missing. No real-time trigger mechanism detected.',
      confidence: 0.65,
      status: 'Partially Implemented'
    },
    {
      id: 'REQ-SEC-008',
      context: 'End-to-end encryption for data in transit using TLS 1.3',
      evidence: [],
      reasoning: 'No TLS configuration found in application layer. Server setup unclear from retrieved context.',
      confidence: 0.15,
      status: 'Missing'
    },
    {
      id: 'REQ-API-023',
      context: 'Rate limiting for API endpoints with token bucket algorithm',
      evidence: ['rate_limiter.py:23-67', 'middleware.py:45-58'],
      reasoning: 'Token bucket algorithm implemented. Rate limits configurable per endpoint. Middleware integration complete.',
      confidence: 0.95,
      status: 'Fully Implemented'
    }
  ]
  
  const current = requirements[phase]
  const statusColor = 
    current.status === 'Fully Implemented' ? 'text-green-600' :
    current.status === 'Partially Implemented' ? 'text-yellow-600' :
    'text-red-600'
  
  return (
    <div className="w-full h-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2.5 flex items-center justify-between">
        <span className="text-gray-900 font-semibold">AI Reasoning Inspector</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 h-[calc(100%-3rem)] overflow-y-auto">
        <div className="space-y-2 animate-fadeIn" style={{ animationDelay: '0ms' }}>
          <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider">Requirement</div>
          <div className="text-blue-600 font-semibold">{current.id}</div>
        </div>
        
        <div className="space-y-2 animate-fadeIn" style={{ animationDelay: '400ms' }}>
          <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider">Context</div>
          <div className="text-gray-700 leading-relaxed text-xs sm:text-sm">
            {current.context}
          </div>
        </div>
        
        <div className="space-y-2 animate-fadeIn" style={{ animationDelay: '800ms' }}>
          <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider">Retrieved Evidence</div>
          {current.evidence.length > 0 ? (
            <div className="space-y-1.5">
              {current.evidence.map((ev, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded px-3 py-2 text-gray-600 text-xs animate-slideIn" style={{ animationDelay: `${1200 + idx * 200}ms` }}>
                  <span className="text-gray-400">&gt;</span> {ev}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 italic text-xs">No artifacts found</div>
          )}
        </div>
        
        <div className="space-y-2 animate-fadeIn" style={{ animationDelay: '1600ms' }}>
          <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider">Reasoning</div>
          <div className="text-gray-700 leading-relaxed bg-blue-50 border-l-2 border-blue-500 pl-3 py-2 text-xs sm:text-sm">
            {current.reasoning}
          </div>
        </div>
        
        <div className="space-y-3 animate-fadeIn" style={{ animationDelay: '2000ms' }}>
          <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider">Confidence</div>
          <div className="space-y-1.5">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-2000 ease-out animate-fillBar"
                style={{ width: `${current.confidence * 100}%` }}
              ></div>
            </div>
            <div className="text-gray-600 text-[10px] sm:text-xs">{(current.confidence * 100).toFixed(1)}%</div>
          </div>
        </div>
        
        <div className="pt-3 border-t border-gray-200 animate-fadeIn" style={{ animationDelay: '2400ms' }}>
          <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-wider mb-2">Classification</div>
          <div className={`${statusColor} font-semibold text-sm sm:text-base animate-glow`}>
            {current.status}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section - Split 50/50 */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
        
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE - System Identity */}
            <div className="space-y-8">
              
              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Automated Requirements Traceability in Software Systems
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
              </div>
              
              {/* Supporting Description */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                A multi-agent system that ingests Software Requirements Specifications (SRS), 
                retrieves semantic evidence via RAG-based indexing, and applies LLM reasoning 
                to generate validated traceability mappings between requirements and code artifacts.
              </p>
              
              {/* Capability Signal Row */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  'SRS-Driven Analysis',
                  'RAG-Based Evidence Retrieval',
                  'LLM Reasoning',
                  'Explainable Traceability'
                ].map((signal, idx) => (
                  <div 
                    key={idx}
                    className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded text-xs sm:text-sm text-gray-700 font-medium"
                  >
                    {signal}
                  </div>
                ))}
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="group px-7 py-3.5 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                  Explore System
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-7 py-3.5 bg-white text-gray-900 rounded-lg font-semibold border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all">
                  View Architecture
                </button>
              </div>
              
              {/* Context Line */}
              <p className="text-sm text-gray-500 border-l-2 border-gray-300 pl-4">
                Designed for large-scale, multi-language software systems
              </p>
              
            </div>
            
            {/* RIGHT SIDE - Dashboard Mock UI */}
            <div className="relative">
              
              {/* Main Dashboard Container */}
              <div className="relative bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-float">
                
                {/* Dashboard Header */}
                <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-900">Traceability Analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Activity className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Live</span>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-4 sm:p-6 space-y-4">
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200">
                      <div className="text-lg sm:text-2xl font-bold text-gray-900">247</div>
                      <div className="text-[10px] sm:text-xs text-gray-600">Requirements</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200">
                      <div className="text-lg sm:text-2xl font-bold text-green-600">89%</div>
                      <div className="text-[10px] sm:text-xs text-gray-600">Traced</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200">
                      <div className="text-lg sm:text-2xl font-bold text-blue-600">1.2k</div>
                      <div className="text-[10px] sm:text-xs text-gray-600">Artifacts</div>
                    </div>
                  </div>
                  
                  {/* Traceability Matrix Table */}
                  <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-12 gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200 text-[10px] sm:text-xs font-medium text-gray-700">
                      <div className="col-span-5">Requirement ID</div>
                      <div className="col-span-4">Status</div>
                      <div className="col-span-3">Coverage</div>
                    </div>
                    
                    {/* Table Rows */}
                    {[
                      { id: 'REQ-AUTH-001', status: 'Implemented', coverage: '100%', color: 'green' },
                      { id: 'REQ-AUTH-002', status: 'Partial', coverage: '67%', color: 'yellow' },
                      { id: 'REQ-DATA-015', status: 'Implemented', coverage: '100%', color: 'green' },
                      { id: 'REQ-API-023', status: 'Missing', coverage: '0%', color: 'red' },
                      { id: 'REQ-SEC-008', status: 'Implemented', coverage: '100%', color: 'green' },
                    ].map((row, idx) => (
                      <div 
                        key={idx}
                        className="grid grid-cols-12 gap-2 px-3 py-2.5 border-b border-gray-100 hover:bg-gray-100 transition-colors text-xs"
                      >
                        <div className="col-span-5 text-gray-900 font-mono text-[10px] sm:text-xs">{row.id}</div>
                        <div className="col-span-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-medium ${
                            row.color === 'green' ? 'bg-green-100 text-green-700 border border-green-200' :
                            row.color === 'yellow' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                            'bg-red-100 text-red-700 border border-red-200'
                          }`}>
                            {row.color === 'green' && <CheckCircle2 className="w-2.5 h-2.5" />}
                            {row.color === 'yellow' && <AlertTriangle className="w-2.5 h-2.5" />}
                            {row.color === 'red' && <XCircle className="w-2.5 h-2.5" />}
                            {row.status}
                          </span>
                        </div>
                        <div className="col-span-3 text-gray-600 text-[10px] sm:text-xs">{row.coverage}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Evidence Panel */}
                  <div className="bg-blue-50 rounded-lg border border-blue-100 p-3 sm:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">LLM Reasoning</span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-700 leading-relaxed">
                      Requirement REQ-AUTH-001 is fully implemented across 
                      <span className="text-gray-900 font-mono"> auth/login.ts</span> and 
                      <span className="text-gray-900 font-mono"> middleware/auth.ts</span>. 
                      Evidence retrieved via RAG includes JWT validation logic and session management.
                    </p>
                  </div>
                  
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl blur-xl opacity-60 animate-pulse-slow"></div>
              
            </div>
            
          </div>
        </div>
      </section>

      {/* Engineering Problem */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              The Engineering Problem
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                Manual requirements traceability in modern software systems is inherently fragmented and error-prone. 
                As codebases evolve across distributed repositories, maintaining accurate mappings between Software 
                Requirements Specifications and implementation artifacts becomes increasingly complex.
              </p>
              <p>
                Engineering teams face persistent challenges: requirements may be partially implemented across 
                multiple modules, silently deprecated without documentation updates, or entirely unimplemented 
                while marked as complete. Traditional static analysis tools lack the semantic understanding required 
                to bridge natural language requirements and programmatic logic.
              </p>
              <p>
                This gap introduces significant risk in regulated domains, quality assurance processes, and 
                large-scale system audits where requirements coverage verification is mandatory but manually 
                prohibitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Driven Solution */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            The AI-Driven Solution
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Inputs */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-700" />
                System Inputs
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Software Requirements Specifications</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Structured SRS documents containing functional and non-functional requirements with 
                    unique identifiers and acceptance criteria.
                  </p>
                </div>
                <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Git-Based Source Repositories</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Multi-language codebases with support for Python, Java, JavaScript, TypeScript, and C++, 
                    including configuration files and design artifacts.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Outputs */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-gray-700" />
                System Outputs
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Traceability Matrix</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Comprehensive requirement-to-code mappings with explicit file paths, line references, 
                    and semantic evidence for each traced relationship.
                  </p>
                </div>
                <div className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Coverage Metrics & Risk Analysis</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Quantitative implementation coverage percentages, missing requirement detection, 
                    and partial implementation identification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agentic Architecture */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Agentic RAG Architecture
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              A coordinated multi-agent system where specialized AI agents handle distinct aspects of 
              the traceability pipeline, from requirement extraction to explainability generation.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Agent 1 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Requirement Extraction Agent
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Parses SRS documents to extract structured requirement records with IDs, descriptions, 
                acceptance criteria, and priority classifications using NLP techniques.
              </p>
            </div>
            
            {/* Agent 2 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Semantic Retrieval Agent (RAG)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Embeds requirements and code artifacts into vector space, performing similarity-based 
                retrieval to identify semantically relevant code segments for each requirement.
              </p>
            </div>
            
            {/* Agent 3 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                LLM Reasoning Agent
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Analyzes retrieved code context using large language models to determine implementation 
                status, reasoning strictly over provided evidence without hallucination.
              </p>
            </div>
            
            {/* Agent 4 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Explainability Agent (XAI)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Generates human-readable justifications with explicit code references, file paths, 
                and line numbers to support AI-generated traceability decisions.
              </p>
            </div>
            
            {/* Agent 5 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Metrics & Reporting Agent
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Computes requirement coverage percentages, identifies missing and partial implementations, 
                and generates audit-ready traceability matrices.
              </p>
            </div>
            
            {/* Agent 6 */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <GitBranch className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Repository Analysis Agent
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Traverses Git repositories to extract source code, configuration files, and design artifacts 
                across multiple programming languages and frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAG + LLM Flow */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            RAG + LLM Reasoning Pipeline
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* Step 1 */}
            <div className="flex gap-3 sm:gap-6 items-start">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center font-semibold text-sm sm:text-base">
                1
              </div>
              <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Vector Embedding Generation</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Requirements and code artifacts are transformed into high-dimensional vector embeddings 
                  using pre-trained language models, capturing semantic meaning beyond keyword matching.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex gap-3 sm:gap-6 items-start">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center font-semibold text-sm sm:text-base">
                2
              </div>
              <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Semantic Similarity Retrieval</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  For each requirement, the system performs k-nearest neighbor search in vector space 
                  to retrieve the most semantically relevant code segments from the indexed repository.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex gap-3 sm:gap-6 items-start">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center font-semibold text-sm sm:text-base">
                3
              </div>
              <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Context-Grounded LLM Reasoning</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Retrieved code context is provided to the LLM with strict instructions to reason exclusively 
                  over supplied evidence, preventing hallucination and ensuring traceable conclusions.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex gap-3 sm:gap-6 items-start">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center font-semibold text-sm sm:text-base">
                4
              </div>
              <div className="flex-1 bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Implementation Status Classification</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Based on reasoning analysis, each requirement is classified into one of three states with 
                  supporting evidence and confidence scores.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700 font-medium">Fully Implemented</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span className="text-gray-700 font-medium">Partially Implemented</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span className="text-gray-700 font-medium">Missing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explainability */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Explainability & Transparency
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Every traceability decision generated by the system is accompanied by explicit, 
                  human-readable justifications grounded in concrete code evidence. The Explainability 
                  Agent (XAI) ensures that auditors and engineers can independently verify AI conclusions.
                </p>
                <p>
                  Justifications include direct file paths, line number ranges, relevant code snippets, 
                  and natural language explanations of how retrieved artifacts satisfy requirement criteria. 
                  This transparency is critical for building trust in AI-assisted engineering workflows.
                </p>
                <p>
                  The system maintains a complete audit trail of retrieval queries, context windows, 
                  and reasoning chains, enabling retrospective analysis and continuous model improvement.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Evidence-Based Decisions</h4>
                    <p className="text-sm text-gray-600">All conclusions cite specific code artifacts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Explicit Code References</h4>
                    <p className="text-sm text-gray-600">File paths and line numbers for every trace</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Human-Readable Justifications</h4>
                    <p className="text-sm text-gray-600">Natural language explanations for reviewers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] lg:h-[600px]">
              <AIReasoningWindow />
            </div>
          </div>
        </div>
      </section>

      {/* Traceability Matrix */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            Traceability Matrix & Coverage Metrics
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            The system generates comprehensive traceability matrices that map each requirement to its 
            implementing code artifacts, providing quantitative coverage metrics and risk visibility.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">94.7%</div>
              <div className="text-sm text-gray-600">Overall Coverage</div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gray-900" style={{ width: '94.7%' }}></div>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">142</div>
              <div className="text-sm text-gray-600">Fully Implemented</div>
              <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Complete satisfaction of acceptance criteria</span>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
              <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">8</div>
              <div className="text-sm text-gray-600">Missing Requirements</div>
              <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                <XCircle className="w-4 h-4 text-red-600" />
                <span>No implementation evidence found</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-xs sm:text-sm min-w-[600px]">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-900">Req ID</th>
                    <th className="text-left px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-900">Description</th>
                    <th className="text-left px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-900">Status</th>
                    <th className="text-left px-3 sm:px-6 py-3 sm:py-4 font-semibold text-gray-900">Artifacts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs">REQ-AUTH-001</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700">User authentication via OAuth 2.0</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium">
                        <CheckCircle2 className="w-3 h-3" />
                        Fully Implemented
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs text-gray-600">oauth_provider.py, auth.py</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs">REQ-DATA-012</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700">Real-time data validation pipeline</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-xs font-medium">
                        <AlertTriangle className="w-3 h-3" />
                        Partially Implemented
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs text-gray-600">validators.py</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs">REQ-API-023</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700">Rate limiting for API endpoints</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium">
                        <CheckCircle2 className="w-3 h-3" />
                        Fully Implemented
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs text-gray-600">rate_limiter.py, middleware.py</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs">REQ-SEC-008</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700">End-to-end encryption for data in transit</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 text-red-700 rounded text-xs font-medium">
                        <XCircle className="w-3 h-3" />
                        Missing
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs text-gray-600">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Applicability */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Real-World Applicability
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 mb-3 sm:mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Software Audits</h3>
              <p className="text-sm text-gray-600">
                Accelerate compliance verification in regulated industries by automatically 
                generating audit-ready traceability documentation.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 mb-3 sm:mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Compliance Verification</h3>
              <p className="text-sm text-gray-600">
                Ensure adherence to industry standards (ISO 26262, DO-178C) through comprehensive 
                requirement-to-code traceability.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 mb-3 sm:mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Quality Assurance</h3>
              <p className="text-sm text-gray-600">
                Identify gaps in requirement coverage early in development cycles, reducing 
                technical debt and rework costs.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 mb-3 sm:mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Large-Scale Systems</h3>
              <p className="text-sm text-gray-600">
                Maintain traceability in evolving enterprise codebases with thousands of 
                requirements across distributed teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Technology Stack
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-medium text-gray-700">
              React
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-medium text-gray-700">
              Next.js
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-medium text-gray-700">
              FastAPI
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-medium text-gray-700">
              Large Language Models
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-medium text-gray-700">
              Retrieval-Augmented Generation
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-medium text-gray-700">
              Vector Databases
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-medium text-gray-700">
              Python
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm font-medium text-gray-700">
              TypeScript
            </div>
          </div>
        </div>
      </section>

      {/* Academic Footer */}
      <footer className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
              An Agentic RAG-Based Framework for Automated Requirements Traceability in Software Systems
            </h3>
            <p className="text-gray-600">
              Major Project – Computer Science & Engineering
              <br />Sahyadri College of Engineering & Management, Mangaluru, Karnataka, India 
            </p>
            <div className="pt-6 border-t border-gray-200 mt-6">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
