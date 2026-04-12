import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';


interface Project {
  id: string; // Firebase ID
  title: string;
  category: string;
  platform: string;
  platformIcon: string;
  industry: string;
  budget: string;
  results: {
    roas: string;
    conversions: string;
    revenue: string;
  };
  before: string;
  after: string;
}

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'E-Commerce',
    platform: 'Facebook Ads',
    platformIcon: '📘',
    industry: '',
    budget: '',
    duration: '',
    color: '#0f3559',
    borderColor: 'rgba(15,53,89,0.2)',
    description: '',
    challenge: '',
    solution: '',
    results: [
      { label: 'ROAS', before: '', after: '', change: '', positive: true },
      { label: 'Revenue', before: '', after: '', change: '', positive: true }
    ],
    tags: '',
    highlights: [
      { icon: '💰', value: '', label: 'ROAS' },
      { icon: '📈', value: '', label: 'Revenue' }
    ]
  });
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      setProjects(projectsData);
    } catch (error) {
      console.error("Error fetching projects: ", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSave = async () => {
    if (!newProject.title) {
      setMessage('Project title is required!');
      return;
    }

    setIsSaving(true);
    setMessage('');

    try {
      // Process tags string to array
      const tagsArray = newProject.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

      const projectToSave = {
        ...newProject,
        tags: tagsArray,
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, "projects"), projectToSave);

      setNewProject({
        title: '',
        category: 'E-Commerce',
        platform: 'Facebook Ads',
        platformIcon: '📘',
        industry: '',
        budget: '',
        duration: '',
        color: '#0f3559',
        borderColor: 'rgba(15,53,89,0.2)',
        description: '',
        challenge: '',
        solution: '',
        results: [
          { label: 'ROAS', before: '', after: '', change: '', positive: true },
          { label: 'Revenue', before: '', after: '', change: '', positive: true }
        ],
        tags: '',
        highlights: [
          { icon: '💰', value: '', label: 'ROAS' },
          { icon: '📈', value: '', label: 'Revenue' }
        ]
      });

      setMessage('Project uploaded to Firebase!');
      fetchProjects();
    } catch (error) {
      console.error("Error saving project: ", error);
      setMessage('Error saving project. Check console.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      await deleteDoc(doc(db, "projects", id));
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-bg-base text-text-base">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Project Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add New Project Form */}
          <div className="lg:col-span-1">
            <div className="glass p-6 rounded-lg sticky top-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Add New Project</h2>

              <div className="space-y-4 max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
                <div>
                  <label className="block mb-1 text-sm text-primary">Project Title</label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="w-full bg-bg-base border border-primary/30 text-text-base px-4 py-2 rounded"
                    placeholder="e.g. Fashion Brand Scale Up"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm text-primary">Category</label>
                    <select
                      id="project-category"
                      title="Project Category"
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                      className="w-full bg-bg-base border border-primary/30 text-text-base px-4 py-2 rounded"
                    >
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Lead Generation">Lead Generation</option>
                      <option value="Education">Education</option>
                      <option value="Local Business">Local Business</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-primary">Industry</label>
                    <input
                      type="text"
                      value={newProject.industry}
                      onChange={(e) => setNewProject({ ...newProject, industry: e.target.value })}
                      className="w-full bg-bg-base border border-primary/30 text-text-base px-4 py-2 rounded"
                      placeholder="e.g. Fashion"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm text-primary">Platform</label>
                    <input
                      type="text"
                      value={newProject.platform}
                      onChange={(e) => setNewProject({ ...newProject, platform: e.target.value })}
                      className="w-full bg-bg-base border border-primary/30 text-text-base px-4 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-primary">Platform Icon</label>
                    <input
                      type="text"
                      value={newProject.platformIcon}
                      onChange={(e) => setNewProject({ ...newProject, platformIcon: e.target.value })}
                      className="w-full bg-bg-base border border-primary/30 text-text-base px-4 py-2 rounded"
                      placeholder="e.g. 📘"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm text-primary">Monthly Budget</label>
                    <input
                      type="text"
                      value={newProject.budget}
                      onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })}
                      className="w-full bg-bg-base border border-primary/30 text-text-base px-4 py-2 rounded"
                      placeholder="$0,000 / month"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm text-primary">Duration</label>
                    <input
                      type="text"
                      value={newProject.duration}
                      onChange={(e) => setNewProject({ ...newProject, duration: e.target.value })}
                      className="w-full bg-bg-base border border-primary/30 text-text-base px-4 py-2 rounded"
                      placeholder="e.g. 4 Months"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-sm text-primary">Brief Description</label>
                  <textarea
                    id="project-description"
                    title="Brief Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="w-full bg-bg-base border border-primary/30 text-text-base px-4 py-2 rounded"
                    rows={2}
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm text-primary">The Challenge</label>
                  <textarea
                    id="project-challenge"
                    title="The Challenge"
                    value={newProject.challenge}
                    onChange={(e) => setNewProject({ ...newProject, challenge: e.target.value })}
                    className="w-full bg-bg-base border border-primary/30 text-text-base px-4 py-2 rounded"
                    rows={2}
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm text-primary">The Solution</label>
                  <textarea
                    id="project-solution"
                    title="The Solution"
                    value={newProject.solution}
                    onChange={(e) => setNewProject({ ...newProject, solution: e.target.value })}
                    className="w-full bg-bg-base border border-primary/30 text-text-base px-4 py-2 rounded"
                    rows={2}
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm text-primary">Main Results (Highlights)</label>
                  {newProject.highlights.map((h, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 mt-2">
                      <input
                        type="text"
                        value={h.icon}
                        onChange={(e) => {
                          const newH = [...newProject.highlights];
                          newH[i].icon = e.target.value;
                          setNewProject({ ...newProject, highlights: newH });
                        }}
                        className="bg-bg-base border border-primary/30 text-text-base px-2 py-1 rounded text-sm"
                        placeholder="Icon"
                      />
                      <input
                        type="text"
                        value={h.value}
                        onChange={(e) => {
                          const newH = [...newProject.highlights];
                          newH[i].value = e.target.value;
                          setNewProject({ ...newProject, highlights: newH });
                        }}
                        className="bg-bg-base border border-primary/30 text-text-base px-2 py-1 rounded text-sm"
                        placeholder="Value"
                      />
                      <input
                        type="text"
                        value={h.label}
                        onChange={(e) => {
                          const newH = [...newProject.highlights];
                          newH[i].label = e.target.value;
                          setNewProject({ ...newProject, highlights: newH });
                        }}
                        className="bg-bg-base border border-primary/30 text-text-base px-2 py-1 rounded text-sm"
                        placeholder="Label"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block mb-1 text-sm text-primary">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={newProject.tags}
                    onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                    className="w-full bg-bg-base border border-primary/30 text-text-base px-4 py-2 rounded"
                    placeholder="Facebook Ads, Retargeting, DPA"
                  />
                </div>

                {message && (
                  <div className={`text-center font-bold ${message.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
                    {message}
                  </div>
                )}

                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="w-full bg-primary text-text-base font-extrabold py-4 rounded hover:bg-opacity-90 transition shadow-[0_0_20px_rgba(15,53,89,0.3)]"
                >
                  {isSaving ? 'Uploading...' : 'Upload Project'}
                </button>
              </div>
            </div>
          </div>

          {/* Projects List */}
          <div className="lg:col-span-2">
            <div className="glass p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-primary">All Projects</h2>

              {projects.length === 0 ? (
                <div className="text-center py-12 text-secondary">
                  No projects yet. Add your first project above!
                </div>
              ) : (
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="glass p-4 rounded-lg border border-primary/30">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-text-base">{project.title}</h3>
                          <p className="text-primary text-sm">{project.platform}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-primary/20 text-primary rounded hover:bg-primary/40">
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(project.id)}
                            className="px-3 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/40"
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="bg-bg-base p-2 rounded text-center border border-primary/10">
                            <div className="text-xs text-secondary">{h.label}</div>
                            <div className="font-bold text-primary">{h.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4">
                        <h4 className="text-primary text-sm font-bold mb-1">Challenge:</h4>
                        <p className="text-gray-300 text-sm line-clamp-2">{project.challenge}</p>
                      </div>

                      <div className="mt-2">
                        <h4 className="text-primary text-sm font-bold mb-1">Solution:</h4>
                        <p className="text-green-400 text-sm line-clamp-2">{project.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}