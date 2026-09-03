// Shared synthetic dataset for the iOS remote mockups. FICTIONAL titles/branches (this folder is
// mirrored to a PUBLIC pages repo; never put real client, family, or staff names here).
// Org tags: GM = Growing Mindfully · W.s = Winn.solutions · P = Personal.  Priority: P0 (drop everything) … P3 (someday).
// status: needs_you | working | waiting | idle | stale | parked.  host: mactop | mini | macbook.
window.FLEET = {
  self: "iPhone", builtAt: "2026-09-03T12:04:00-07:00",
  hosts: [
    { id: "mactop",  label: "MacTop",  color: "#6a2bc4", live: true,  sessions: 7 },
    { id: "mini",    label: "Mini",    color: "#9e2790", live: true,  sessions: 3 },
    { id: "macbook", label: "MacBook", color: "#b32d63", live: false, sessions: 4 }
  ],
  orgs: [
    { id: "GM", label: "Growing Mindfully", color: "#1f9e6b" },
    { id: "W.s", label: "Winn.solutions",   color: "#4b5ee8" },
    { id: "P",  label: "Personal",          color: "#d97706" }
  ],
  priorities: [
    { id: "P0", label: "Now",   color: "#dc2626" },
    { id: "P1", label: "Today", color: "#ea580c" },
    { id: "P2", label: "Week",  color: "#2563eb" },
    { id: "P3", label: "Later", color: "#6b7280" }
  ],
  pinned: "s01",
  sessions: [
    { id:"s01", title:"Daily Invite Campaign Runner", repo:"recruiting", branch:"send-daily-invites", org:"GM", priority:"P1", host:"mini",    status:"working",   ago:"1d",  unread:false, task:"86ey1a2b", now:"Sending today's batch (14 of 40)", next:"Log replies to the board", model:"sonnet", ctx:41, cost:6.2 },
    { id:"s02", title:"Interview Outcome Follow-Up", repo:"recruiting", branch:"outcome-review-1136", org:"GM", priority:"P0", host:"mactop", status:"needs_you", ago:"now", unread:true,  task:"86ey1a3c", now:"Waiting for approval to send the offer letter draft", next:"Send + file", model:"opus", ctx:68, cost:21.6, question:"Approve sending the offer letter draft to the candidate?" },
    { id:"s03", title:"Email Setup and Phone Integration", repo:"client-ops", branch:"setup-phone-endpoints", org:"W.s", priority:"P1", host:"mactop", status:"working", ago:"2m", unread:false, task:"86ey1a4d", now:"Wiring the inbound webhook to the CRM", next:"Verify a test call lands", model:"opus", ctx:54, cost:12.1 },
    { id:"s04", title:"Storm Bundle Fault Triage", repo:"continuous-assurance", branch:"medic-r4", org:"P", priority:"P2", host:"mactop", status:"working", ago:"4m", unread:false, task:null, now:"Bisecting the launchd calendar drift", next:"Convert to StartInterval", model:"opus", ctx:73, cost:18.9 },
    { id:"s05", title:"Insurance Quotes Status Update", repo:"miscellaneous", branch:"quotes-status-dashboard", org:"W.s", priority:"P1", host:"macbook", status:"needs_you", ago:"7m", unread:true, task:"86ey1a5e", now:"Two carriers replied; needs a pick before binding", next:"Bind the chosen quote", model:"sonnet", ctx:33, cost:4.4, question:"Carrier A ($4,120/yr, $2,500 deductible) or Carrier B ($3,890/yr, $5,000 deductible)?" },
    { id:"s06", title:"ECE Transcript Validation", repo:"recruiting", branch:"transcript-validation-1134", org:"GM", priority:"P2", host:"mini", status:"waiting", ago:"18m", unread:false, task:"86ey1a6f", now:"Waiting on the registrar's reply (sent 09:12)", next:"Score the transcript", model:"sonnet", ctx:22, cost:2.1 },
    { id:"s07", title:"Sales Operations Audit", repo:"client-ops", branch:"organize-sales-questions", org:"W.s", priority:"P2", host:"mactop", status:"working", ago:"25m", unread:true, task:"86ey1a7g", now:"Drafting the 12-question intake", next:"Review with the client lead", model:"opus", ctx:61, cost:15.7 },
    { id:"s08", title:"Mac Mini Storage Comparison", repo:"miscellaneous", branch:"storage-solution-research", org:"P", priority:"P3", host:"mactop", status:"idle", ago:"1h", unread:false, task:null, now:"Comparison table done; nothing pending", next:"Pick a drive", model:"sonnet", ctx:29, cost:3.0 },
    { id:"s09", title:"Preschool RFP Search", repo:"growingmindfully", branch:"search-rfp-regional", org:"GM", priority:"P2", host:"macbook", status:"idle", ago:"15m", unread:true, task:"86ey1a8h", now:"Found 3 open RFPs; summary written", next:"Decide which to pursue", model:"sonnet", ctx:38, cost:5.5 },
    { id:"s10", title:"Fleet Deck Session Persistence", repo:"miscellaneous", branch:"persistent-sessions", org:"P", priority:"P1", host:"mactop", status:"working", ago:"2h", unread:false, task:"86ey1a9i", now:"Overnight loop: journey run 3 on mini", next:"Wrap + decisions card", model:"opus", ctx:82, cost:44.0 },
    { id:"s11", title:"Multi-Agent Task Management", repo:"miscellaneous", branch:"multi-agent-framework", org:"P", priority:"P3", host:"mactop", status:"stale", ago:"5h", unread:false, task:null, now:"Researching agent issue assignment patterns", next:"Synthesize", model:"sonnet", ctx:68, cost:21.6 },
    { id:"s12", title:"Teacher Appreciation Program", repo:"growingmindfully", branch:"appreciation-program-design", org:"GM", priority:"P2", host:"macbook", status:"parked", ago:"2d", unread:false, task:"86ey1b0j", due:"Sep 7", now:"Parked until the budget reply arrives", next:"Resume when the reply lands", model:"sonnet", ctx:17, cost:1.9 },
    { id:"s13", title:"Moment Dispatcher Rail", repo:"recruiting", branch:"dispatcher-rail", org:"GM", priority:"P1", host:"mini", status:"working", ago:"9m", unread:false, task:"86ey1b1k", now:"Rail fires on new moments; testing dedupe", next:"Ship the launchd item", model:"opus", ctx:47, cost:9.3 },
    { id:"s14", title:"Website Handbook Page Fix", repo:"growingmindfully", branch:"fix-handbook-regression", org:"GM", priority:"P0", host:"macbook", status:"needs_you", ago:"3m", unread:true, task:"86ey1b2l", now:"Fix ready; wants a go to deploy to production", next:"Deploy", model:"sonnet", ctx:26, cost:2.8, question:"Deploy the handbook page fix to production now?" }
  ],
  // Session detail transcript (used by every variant's detail screen) — for s02.
  transcript: [
    { role:"user", text:"Draft the offer letter for the candidate from yesterday's loop and stage it for my approval." },
    { role:"assistant", text:"Drafted from the template in the recruiting repo. Salary and start date pulled from the interview notes; two placeholders remain (manager name, first-day location)." },
    { role:"tool", name:"Read", text:"templates/offer-letter.md" },
    { role:"tool", name:"Write", text:"outbox/offer-letter-1136.md (1.2 KB)" },
    { role:"assistant", text:"The draft is staged. Approve to send it from admin@ as a reply in the existing thread, or tell me what to change." },
    { role:"gate", text:"Approve sending the offer letter draft to the candidate?", options:["Approve","Edit first","Deny"] }
  ],
  // Org section: GM → prioritized tasks → subtasks → sessions (join by task id).
  orgTasks: {
    GM: [
      { id:"86ey1a3c", name:"Send offer letter to the selected candidate", priority:"P0", status:"in progress", due:"Sep 3", subtasks:[
          { id:"86ey1a3c-1", name:"Draft from template", status:"done" },
          { id:"86ey1a3c-2", name:"Jarred approves the draft", status:"needs you" },
          { id:"86ey1a3c-3", name:"Send + file the reply", status:"to do" } ] },
      { id:"86ey1b2l", name:"Fix the handbook page regression on the website", priority:"P0", status:"in progress", due:"Sep 3", subtasks:[
          { id:"86ey1b2l-1", name:"Reproduce on staging", status:"done" },
          { id:"86ey1b2l-2", name:"Deploy to production", status:"needs you" } ] },
      { id:"86ey1a2b", name:"Run the daily invite campaign", priority:"P1", status:"in progress", due:"daily", subtasks:[] },
      { id:"86ey1b1k", name:"Moment dispatcher rail", priority:"P1", status:"in progress", due:"Sep 4", subtasks:[
          { id:"86ey1b1k-1", name:"Dedupe repeated moments", status:"in progress" },
          { id:"86ey1b1k-2", name:"launchd item on the mini", status:"to do" } ] },
      { id:"86ey1a6f", name:"Validate the ECE transcript", priority:"P2", status:"waiting", due:"Sep 5", subtasks:[] },
      { id:"86ey1a8h", name:"Preschool RFP search", priority:"P2", status:"open", due:"Sep 6", subtasks:[
          { id:"86ey1a8h-1", name:"Pick which RFPs to pursue", status:"needs you" } ] },
      { id:"86ey1b0j", name:"Teacher appreciation program", priority:"P2", status:"parked", due:"Sep 7", subtasks:[] },
      { id:"86ey1c3m", name:"Renew the food program paperwork", priority:"P3", status:"open", due:"Sep 30", subtasks:[] }
    ]
  }
};
