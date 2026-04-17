/**
 * Interview Prep Hub — Site Data
 * ─────────────────────────────────────────────────────────────
 * Central source of truth for all topics, concepts, and metadata.
 * Update this file to add new topics, concept groups, and study pages.
 *
 * File paths in each concept are relative to the topic subdirectory.
 *   e.g.  "oop.html"                → java/oop.html
 *         "reference/cheatsheet.html" → java/reference/cheatsheet.html
 *
 * Status values:
 *   "available"   — file exists, link is active
 *   "placeholder" — file not yet added; card is shown but dimmed
 */

const SITE_DATA = {

  meta: {
    title:       'Interview Prep Hub',
    subtitle:    'A focused study system for software engineering interviews',
    totalTopics:  10,
    totalHours:  '50+',
    lastUpdated: '2026-04-17'
  },

  /* ── Recently Added ─────────────────────────────────────── */
  recentlyAdded: [
    {
      topicId:    'java',
      topicTitle: 'Java',
      title:      'GC Masterclass',
      path:       'java/gc_masterclass.html',
      addedDate:  '2026-03-20'
    },
    {
      topicId:    'java',
      topicTitle: 'Java',
      title:      'Heap vs Stack — Learning Module',
      path:       'java/heap-vs-stack-learning-module.html',
      addedDate:  '2026-03-18'
    },
    {
      topicId:    'javascript',
      topicTitle: 'JavaScript',
      title:      'JS Fundamentals Guide',
      path:       'javascript/js-fundamentals-guide.html',
      addedDate:  '2026-03-15'
    }
  ],

  /* ── Featured / Pinned ──────────────────────────────────── */
  featured: [
    {
      topicId:    'java',
      topicTitle: 'Java',
      title:      'OOP Principles — Interactive Module',
      path:       'java/oop-learning-module.html',
      badge:      'Interactive',
      badgeColor: 'cyan'
    },
    {
      topicId:    'java',
      topicTitle: 'Java',
      title:      'Principles of OOP',
      path:       'java/principles_of_oop_learning_module.html',
      badge:      'Deep Dive',
      badgeColor: 'purple'
    },
    {
      topicId:    'behavioral',
      topicTitle: 'Behavioral',
      title:      'STAR Method Guide',
      path:       'behavioral/star-method.html',
      badge:      'Start Here',
      badgeColor: 'green'
    },
    {
      topicId:    'important-faq',
      topicTitle: 'Important FAQ',
      title:      'Master Interview Reference Sheet',
      path:       'important-faq/master_interview_reference_sheet.html',
      badge:      'Reference',
      badgeColor: 'amber'
    }
  ],

  /* ── Topics ─────────────────────────────────────────────── */
  topics: [

    /* ════════════════════════════════════ JAVA */
    {
      id:            'java',
      title:         'Java',
      description:   'Master core Java — OOP principles, Collections internals, concurrency patterns, JVM memory model, and modern functional features.',
      icon:          '☕',
      accentColor:   '#00d4ff',
      accentClass:   'cyan',
      estimatedTime: '6 hrs',
      difficulty:    'intermediate',
      tags:          ['backend', 'oop', 'jvm', 'core'],
      path:          'java/',
      isNew:         false,
      groups: [
        {
          name: 'Object-Oriented Programming',
          concepts: [
            {
              title:      'OOP Principles — Interactive Module',
              subtitle:   'Encapsulation, Inheritance, Polymorphism, Abstraction with interactive examples',
              difficulty: 'beginner',
              time:       '30 min',
              tags:       ['oop', 'fundamentals'],
              file:       'oop-learning-module.html',
              status:     'available',
              featured:   true
            },
            {
              title:      'Principles of OOP',
              subtitle:   'Deep dive into OOP design principles with real-world Java code',
              difficulty: 'beginner',
              time:       '30 min',
              tags:       ['oop', 'fundamentals'],
              file:       'principles_of_oop_learning_module.html',
              status:     'available'
            },
            {
              title:      'Design Patterns',
              subtitle:   'Singleton, Factory, Observer, Strategy, Builder, Decorator',
              difficulty: 'intermediate',
              time:       '1 hr',
              tags:       ['patterns', 'design'],
              file:       'design-patterns.html',
              status:     'available'
            },
            {
              title:      'SOLID Principles',
              subtitle:   'Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['solid', 'design'],
              file:       'solid_principles_learning_module.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Collections Framework',
          concepts: [
            {
              title:      'ArrayList vs LinkedList',
              subtitle:   'Internal implementation, time complexity trade-offs, when to use each',
              difficulty: 'beginner',
              time:       '20 min',
              tags:       ['collections', 'data-structures'],
              file:       'arraylist_vs_linkedlist_learning_module.html',
              status:     'available'
            },
            {
              title:      'HashMap Internals',
              subtitle:   'Hashing, collision handling, load factor, resizing, Java 8 tree bins',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['collections', 'hashmap'],
              file:       'hashmap_internals_learning_module.html',
              status:     'available'
            },
            {
              title:      'Comparable vs Comparator',
              subtitle:   'Sorting strategies, natural ordering, chained comparators',
              difficulty: 'beginner',
              time:       '15 min',
              tags:       ['collections', 'sorting'],
              file:       'comparable_vs_comparator_learning_module.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Core Language',
          concepts: [
            {
              title:      'Exceptions & Error Handling',
              subtitle:   'Checked vs unchecked exceptions, exception hierarchy, best practices, custom exceptions',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['exceptions', 'error-handling', 'Guruji'],
              file:       'exceptions-guide.html',
              status:     'available',
              featured:   true
            }
          ]
        },
        {
          name: 'Concurrency',
          concepts: [
            {
              title:      'Threads & Synchronization',
              subtitle:   'Thread lifecycle, synchronized keyword, volatile, deadlocks, happens-before',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['concurrency', 'threads'],
              file:       'threads_and_synchronization_learning_module.html',
              status:     'available'
            },
            {
              title:      'ExecutorService & Thread Pools',
              subtitle:   'Thread pools, Callable, Future, ScheduledExecutor, ThreadPoolExecutor tuning',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['concurrency', 'executors'],
              file:       'executor-service.html',
              status:     'available'
            },
            {
              title:      'Java Threads Interview Guide',
              subtitle:   'Thread lifecycle, synchronization, executors, and common pitfalls',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['threads', 'concurrency'],
              file:       'java_threads_interview_guide.html',
              status:     'available',
              featured:   true
            },
            {
              title:      'CompletableFuture & Async',
              subtitle:   'Composing async tasks, thenApply/thenCompose, exception handling, combining futures',
              difficulty: 'advanced',
              time:       '45 min',
              tags:       ['concurrency', 'async'],
              file:       'completable-future.html',
              status:     'available',
              isNew:      true
            }
          ]
        },
        {
          name: 'Lambda & Functional Java',
          concepts: [
            {
              title:      'Lambda Expressions — Beginner',
              subtitle:   'Syntax, functional interfaces, method references, common patterns',
              difficulty: 'beginner',
              time:       '25 min',
              tags:       ['lambda', 'functional'],
              file:       'lambda_beginner.html',
              status:     'available'
            },
            {
              title:      'Lambda Internals',
              subtitle:   'How lambdas work under the hood — invokedynamic, LambdaMetafactory, capture',
              difficulty: 'advanced',
              time:       '30 min',
              tags:       ['lambda', 'jvm', 'internals'],
              file:       'lambda_internals.html',
              status:     'available'
            },
            {
              title:      'Streams API',
              subtitle:   'Intermediate/terminal ops, lazy evaluation, parallel streams, collectors',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['streams', 'functional'],
              file:       'streams.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'JVM & Memory',
          concepts: [
            {
              title:      'Heap vs Stack — Learning Module',
              subtitle:   'Memory regions, object allocation, stack frames, reference types',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['jvm', 'memory'],
              file:       'heap-vs-stack-learning-module.html',
              status:     'available'
            },
            {
              title:      'GC Masterclass',
              subtitle:   'Garbage collection algorithms, G1GC, ZGC, tuning flags, memory leaks',
              difficulty: 'advanced',
              time:       '1 hr',
              tags:       ['jvm', 'gc', 'memory'],
              file:       'gc_masterclass.html',
              status:     'available'
            },
            {
              title:      'JVM Garbage Collection Guide',
              subtitle:   'GC roots, generational heap, collectors, pauses, tuning trade-offs, practical profiling',
              difficulty: 'advanced',
              time:       '1 hr',
              tags:       ['jvm', 'gc', 'Guruji'],
              file:       'jvm-gc-guide.html',
              status:     'available',
              isNew:      true
            },
            {
              title:      'Java Fullstack Interview Reference',
              subtitle:   'Comprehensive Java + full-stack interview cheatsheet',
              difficulty: 'intermediate',
              time:       '1 hr',
              tags:       ['reference', 'interview'],
              file:       'java_fullstack_interview_reference_sheet.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Reference',
          concepts: [
            {
              title:      'Java Study Plan',
              subtitle:   'Pomodoro-based path to complete the module',
              difficulty: 'beginner',
              time:       '15 min',
              tags:       ['plan', 'schedule', 'study'],
              file:       'study-plan.html',
              status:     'available',
              featured:   true
            }
          ]
        }
      ]
    },

    /* ════════════════════════════════════ SPRING BOOT */
    {
      id:            'spring-boot',
      title:         'Spring Boot',
      description:   'Build robust Spring Boot applications — dependency injection, REST APIs, JPA, security, and testing patterns used in production.',
      icon:          '🍃',
      accentColor:   '#10b981',
      accentClass:   'green',
      estimatedTime: '5 hrs',
      difficulty:    'intermediate',
      tags:          ['backend', 'framework', 'java'],
      path:          'spring-boot/',
      isNew:         false,
      groups: [
        {
          name: 'Core Concepts',
          concepts: [
            {
              title:      'IoC Container & Beans',
              subtitle:   'ApplicationContext, BeanFactory, bean lifecycle and scopes',
              difficulty: 'beginner',
              time:       '30 min',
              tags:       ['ioc', 'beans', 'core'],
              file:       'spring-core-module.html',
              status:     'available'
            },
            {
              title:      'Dependency Injection',
              subtitle:   'Constructor injection, field injection, @Autowired, qualifiers, profiles',
              difficulty: 'beginner',
              time:       '25 min',
              tags:       ['di', 'core'],
              file:       'dependency-injection.html',
              status:     'available',
              featured:   true
            }
          ]
        },
        {
          name: 'Web & REST',
          concepts: [
            {
              title:      'REST Controllers',
              subtitle:   '@RestController, @RequestMapping, validation, request/response mapping',
              difficulty: 'beginner',
              time:       '30 min',
              tags:       ['rest', 'web', 'api'],
              file:       'spring-mvc-module.html',
              status:     'available'
            },
            {
              title:      'Global Exception Handling',
              subtitle:   '@ExceptionHandler, @ControllerAdvice, ProblemDetail, custom error responses',
              difficulty: 'intermediate',
              time:       '20 min',
              tags:       ['exceptions', 'web'],
              file:       'spring-bridge-module.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Data & Persistence',
          concepts: [
            {
              title:      'JPA & Hibernate',
              subtitle:   'Entities, relationships, lazy/eager loading, N+1 problem, fetch strategies',
              difficulty: 'intermediate',
              time:       '1 hr',
              tags:       ['jpa', 'hibernate', 'database'],
              file:       'jpa-hibernate.html',
              status:     'available'
            },
            {
              title:      'Spring Transactions',
              subtitle:   '@Transactional, isolation levels, propagation types, rollback rules',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['transactions', 'database'],
              file:       'transactions.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Security',
          concepts: [
            {
              title:      'Spring Security & JWT',
              subtitle:   'Authentication, authorization, SecurityFilterChain, JWT token flow',
              difficulty: 'advanced',
              time:       '1 hr',
              tags:       ['security', 'jwt', 'auth'],
              file:       'security-jwt.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Testing',
          concepts: [
            {
              title:      'Testing with Mockito',
              subtitle:   '@SpringBootTest, @MockBean, @WebMvcTest, MockMvc, Mockito patterns',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['testing', 'mockito'],
              file:       'testing-mockito.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Boot Internals',
          concepts: [
            {
              title:      'Auto-Configuration & Starters',
              subtitle:   'How @SpringBootApplication wires defaults, conditional beans, starter dependencies',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['autoconfig', 'starters', 'core'],
              file:       'auto-configuration-starters.html',
              status:     'available'
            },
            {
              title:      'Externalized Configuration',
              subtitle:   'application.yml, @ConfigurationProperties, profiles, env overrides',
              difficulty: 'intermediate',
              time:       '35 min',
              tags:       ['configuration', 'profiles', 'core'],
              file:       'externalized-configuration.html',
              status:     'available'
            },
            {
              title:      'AOP & Proxies',
              subtitle:   'Cross-cutting concerns, proxy types, why self-invocation matters',
              difficulty: 'intermediate',
              time:       '40 min',
              tags:       ['aop', 'proxies', 'core'],
              file:       'aop-proxies.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Production & Ops',
          concepts: [
            {
              title:      'Actuator & Observability',
              subtitle:   'Health checks, metrics, tracing with Micrometer',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['actuator', 'observability', 'metrics'],
              file:       'actuator-observability.html',
              status:     'available'
            },
            {
              title:      'Caching',
              subtitle:   '@Cacheable, cache managers, eviction strategies',
              difficulty: 'intermediate',
              time:       '35 min',
              tags:       ['caching', 'performance'],
              file:       'caching.html',
              status:     'available'
            },
            {
              title:      'Scheduling',
              subtitle:   '@Scheduled, fixedDelay vs fixedRate, thread pools',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['scheduling', 'jobs'],
              file:       'scheduling.html',
              status:     'available'
            },
            {
              title:      'Database Migrations',
              subtitle:   'Flyway/Liquibase workflows and safety practices',
              difficulty: 'intermediate',
              time:       '35 min',
              tags:       ['migrations', 'flyway', 'liquibase'],
              file:       'database-migrations.html',
              status:     'available'
            },
            {
              title:      'Resilience Patterns (Resilience4j)',
              subtitle:   'Circuit breakers, retries, bulkheads, rate limiting',
              difficulty: 'advanced',
              time:       '45 min',
              tags:       ['resilience', 'retries', 'circuit-breaker'],
              file:       'resilience-patterns.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Integration & Clients',
          concepts: [
            {
              title:      'WebClient & REST Clients',
              subtitle:   'Timeouts, retries, exchange vs retrieve, client configuration',
              difficulty: 'intermediate',
              time:       '40 min',
              tags:       ['webclient', 'rest', 'http'],
              file:       'webclient-rest-clients.html',
              status:     'available'
            },
            {
              title:      'Messaging (Kafka/RabbitMQ)',
              subtitle:   'Consumer groups, acking, retries, DLQs, integration patterns',
              difficulty: 'advanced',
              time:       '45 min',
              tags:       ['messaging', 'kafka', 'rabbitmq'],
              file:       'messaging-kafka-rabbit.html',
              status:     'available'
            },
            {
              title:      'OAuth2/OIDC',
              subtitle:   'Flows, JWT validation, client/resource server configuration',
              difficulty: 'advanced',
              time:       '50 min',
              tags:       ['security', 'oauth2', 'oidc'],
              file:       'oauth2-oidc.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Reference',
          concepts: [
            {
              title:      'OAuth2/OIDC Reference',
              subtitle:   'Grant flows, token validation, scopes, and common pitfalls',
              difficulty: 'advanced',
              time:       '30 min',
              tags:       ['security', 'oauth2', 'oidc', 'reference'],
              file:       'oauth2-oidc-reference.html',
              status:     'available'
            },
            {
              title:      'Spring Boot 8-Hour Study Plan',
              subtitle:   'Pomodoro-based path to complete the entire module',
              difficulty: 'beginner',
              time:       '15 min',
              tags:       ['plan', 'schedule', 'study'],
              file:       'study-plan.html',
              status:     'available',
              featured:   true
            },
            {
              title:      'Spring Boot Interview Reference Sheet',
              subtitle:   'Complete Spring Boot interview cheatsheet — beans, web, data, security',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['reference', 'interview'],
              file:       'spring_boot_interview_reference_sheet.html',
              status:     'available'
            }
          ]
        }
      ]
    },



    /* ════════════════════════════════════ IMPORTANT BACKEND TOPICS */
    {
      id:            'important-backend',
      title:         'Important Backend Topics',
      description:   'Focused backend interview notes — microservices architecture, API gateways, resilience, messaging, and production trade-offs.',
      icon:          '🧱',
      accentColor:   '#22d3ee',
      accentClass:   'teal',
      estimatedTime: '5 hrs',
      difficulty:    'intermediate',
      tags:          ['backend', 'architecture', 'microservices'],
      path:          'important-backend/',
      isNew:         true,
      groups: [
        {
          name: 'Init Notes',
          concepts: [
            {
              title:      'Init Notes Index',
              subtitle:   'Master index for the backend notes collection',
              difficulty: 'beginner',
              time:       '20 min',
              tags:       ['overview', 'notes'],
              file:       'notes/index.html',
              status:     'available',
              featured:   true
            },
            {
              title:      'Microservices Interview Prep',
              subtitle:   'Core microservices interview topics and trade-offs',
              difficulty: 'intermediate',
              time:       '35 min',
              tags:       ['microservices', 'architecture'],
              file:       'notes/microservices-interview-prep.html',
              status:     'available'
            },
            {
              title:      'Design Patterns (Backend)',
              subtitle:   'Patterns used in backend services and APIs',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['design', 'patterns'],
              file:       'notes/design-patterns.html',
              status:     'available'
            },
            {
              title:      'API Gateway',
              subtitle:   'Routing, auth, rate limits, and gateway trade-offs',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['api', 'gateway'],
              file:       'notes/api-gateway.html',
              status:     'available'
            },
            {
              title:      'Service Communication',
              subtitle:   'Sync vs async, REST vs messaging, and reliability',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['communication', 'reliability'],
              file:       'notes/service-communication.html',
              status:     'available'
            },
            {
              title:      'Resilience Patterns',
              subtitle:   'Retries, circuit breakers, timeouts, bulkheads',
              difficulty: 'advanced',
              time:       '35 min',
              tags:       ['resilience', 'reliability'],
              file:       'notes/resilience.html',
              status:     'available'
            },
            {
              title:      'Kafka Deployment Notes',
              subtitle:   'Operational considerations and deployment gotchas',
              difficulty: 'advanced',
              time:       '30 min',
              tags:       ['kafka', 'messaging'],
              file:       'notes/kafka-deployment.html',
              status:     'available'
            },
            {
              title:      'Java Deep Dive (Backend)',
              subtitle:   'JVM, GC, and backend performance notes',
              difficulty: 'advanced',
              time:       '35 min',
              tags:       ['java', 'performance'],
              file:       'notes/java-deep-dive.html',
              status:     'available'
            },
            {
              title:      'Data & Excel Notes',
              subtitle:   'Data pipelines, storage, and analytics notes',
              difficulty: 'intermediate',
              time:       '25 min',
              tags:       ['data', 'analytics'],
              file:       'notes/data-excel.html',
              status:     'available'
            },
            {
              title:      'Coding Questions Set',
              subtitle:   'Backend-focused coding question notes',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['coding', 'practice'],
              file:       'notes/coding-questions.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Reference',
          concepts: [
            {
              title:      'Important Backend Topics Study Plan',
              subtitle:   'Pomodoro-based path to complete the module',
              difficulty: 'beginner',
              time:       '15 min',
              tags:       ['plan', 'schedule', 'study'],
              file:       'study-plan.html',
              status:     'available',
              featured:   true
            }
          ]
        }
      ]
    },

    /* ════════════════════════════════════ IMPORTANT FAQ */
    {
      id:            'important-faq',
      title:         'Important FAQ',
      description:   'High-signal interview study sheets and a master reference vault for reviewing the most important Java, Spring, data, cloud, frontend, and behavioral prep material.',
      icon:          '📚',
      accentColor:   '#f59e0b',
      accentClass:   'amber',
      estimatedTime: '4 hrs',
      difficulty:    'intermediate',
      tags:          ['reference', 'faq', 'interview'],
      path:          'important-faq/',
      isNew:         true,
      groups: [
        {
          name: 'Study Sheets',
          concepts: [
            {
              title:      '00 — Interview Study Sheets Index',
              subtitle:   'Gateway index for the curated daily-review sheets',
              difficulty: 'beginner',
              time:       '20 min',
              tags:       ['overview', 'index', 'Guruji'],
              file:       '00_index.html',
              status:     'available',
              featured:   true
            },
            {
              title:      '01 — Java Core Sheet',
              subtitle:   'Java core topics, concept map, and review checklist',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['java', 'core', 'Guruji'],
              file:       '01_java_core_sheet.html',
              status:     'available'
            },
            {
              title:      '02 — Spring & Microservices Sheet',
              subtitle:   'Spring Boot, microservices, and system design notes',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['spring', 'microservices', 'Guruji'],
              file:       '02_spring_microservices_sheet.html',
              status:     'available'
            },
            {
              title:      '03 — Data, Kafka & Cloud Sheet',
              subtitle:   'Data processing, messaging, cloud, and infrastructure review',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['data', 'kafka', 'cloud', 'Guruji'],
              file:       '03_data_kafka_cloud_sheet.html',
              status:     'available'
            },
            {
              title:      '04 — Frontend, Behavioral & Assessment Sheet',
              subtitle:   'Frontend concepts, interview stories, and assessment notes',
              difficulty: 'intermediate',
              time:       '35 min',
              tags:       ['frontend', 'behavioral', 'Guruji'],
              file:       '04_frontend_behavioral_assessment_sheet.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Reference Vault',
          concepts: [
            {
              title:      '05 — Source Prompt Vault',
              subtitle:   'Source prompts and generation notes for the study sheets',
              difficulty: 'advanced',
              time:       '30 min',
              tags:       ['prompt', 'vault', 'Guruji'],
              file:       '05_source_prompt_vault.html',
              status:     'available'
            },
            {
              title:      'Master — Interview Reference Sheet',
              subtitle:   'Canonical merged reference sheet for fast revision',
              difficulty: 'advanced',
              time:       '45 min',
              tags:       ['reference', 'master', 'Guruji'],
              file:       'master_interview_reference_sheet.html',
              status:     'available',
              featured:   true
            }
          ]
        }
      ]
    },

    /* ════════════════════════════════════ SQL */
    {
      id:            'sql',
      title:         'SQL',
      description:   'From complex joins and window functions to query optimization, index tuning, and transaction management — SQL for backend engineers.',
      icon:          '🗄️',
      accentColor:   '#f59e0b',
      accentClass:   'amber',
      estimatedTime: '4 hrs',
      difficulty:    'intermediate',
      tags:          ['database', 'backend', 'querying'],
      path:          'sql/',
      isNew:         false,
      groups: [
        {
          name: 'Core Querying',
          concepts: [
            {
              title:      'Joins Deep Dive',
              subtitle:   'INNER, LEFT, RIGHT, FULL, CROSS joins — visual walkthrough with real examples',
              difficulty: 'beginner',
              time:       '30 min',
              tags:       ['joins', 'querying'],
              file:       'joins.html',
              status:     'available',
              featured:   true
            },
            {
              title:      'Subqueries & CTEs',
              subtitle:   'Correlated subqueries, WITH clause, recursive CTEs, when to use each',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['subqueries', 'cte'],
              file:       'subqueries-cte.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Aggregation & Analytics',
          concepts: [
            {
              title:      'GROUP BY & HAVING',
              subtitle:   'Aggregation functions, filtering groups, common interview patterns',
              difficulty: 'beginner',
              time:       '20 min',
              tags:       ['aggregation', 'group-by'],
              file:       'group-by.html',
              status:     'available'
            },
            {
              title:      'Window Functions',
              subtitle:   'RANK, ROW_NUMBER, DENSE_RANK, PARTITION BY, running totals, LAG/LEAD',
              difficulty: 'advanced',
              time:       '45 min',
              tags:       ['window-functions', 'analytics'],
              file:       'window-functions.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Performance',
          concepts: [
            {
              title:      'Indexes & Query Plans',
              subtitle:   'B-tree vs hash indexes, EXPLAIN output, covering indexes, composite index order',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['indexes', 'performance'],
              file:       'indexes.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Advanced Topics',
          concepts: [
            {
              title:      'Transactions & ACID',
              subtitle:   'ACID properties, isolation levels, locking strategies, deadlock prevention',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['transactions', 'acid'],
              file:       'acid_transactions_learning_module.html',
              status:     'available'
            },
            {
              title:      'Isolation Levels',
              subtitle:   'Dirty/non-repeatable/phantom reads, anomalies, and how isolation levels map',
              difficulty: 'intermediate',
              time:       '25 min',
              tags:       ['transactions', 'isolation'],
              file:       'isolation-levels-learning-module.html',
              status:     'available'
            },
            {
              title:      'Normalization',
              subtitle:   '1NF through BCNF — when to normalize vs denormalize for performance',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['normalization', 'design'],
              file:       'normalization.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Reference',
          concepts: [

            {
              title:      'SQL Study Plan',
              subtitle:   'Pomodoro-based path to complete the module',
              difficulty: 'beginner',
              time:       '15 min',
              tags:       ['plan', 'schedule', 'study'],
              file:       'study-plan.html',
              status:     'available',
              featured:   true
            },
            {
              title:      'DB Interview Reference Sheet',
              subtitle:   'SQL, NoSQL, transactions, indexes — comprehensive database interview cheatsheet',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['reference', 'interview'],
              file:       'db_interview_reference_sheet.html',
              status:     'available'
            }
          ]
        }
      ]
    },

    /* ════════════════════════════════════ SYSTEM DESIGN */
    {
      id:            'system-design',
      title:         'System Design',
      description:   'Design scalable distributed systems. Covers architecture patterns, data at scale, caching, messaging, and end-to-end case studies.',
      icon:          '🏗️',
      accentColor:   '#7c3aed',
      accentClass:   'purple',
      estimatedTime: '8 hrs',
      difficulty:    'advanced',
      tags:          ['architecture', 'distributed', 'scalability'],
      path:          'system-design/',
      isNew:         false,
      groups: [
        {
          name: 'Foundations',
          concepts: [
            {
              title:      'Scalability Patterns',
              subtitle:   'Horizontal vs vertical scaling, stateless services, microservices vs monolith',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['scalability', 'patterns'],
              file:       'scalability.html',
              status:     'placeholder',
              featured:   true
            },
            {
              title:      'CAP Theorem & Consistency',
              subtitle:   'CAP, BASE, eventual vs strong consistency, real-world trade-offs',
              difficulty: 'advanced',
              time:       '30 min',
              tags:       ['cap', 'consistency'],
              file:       'cap-theorem.html',
              status:     'placeholder'
            },
            {
              title:      'API Design Principles',
              subtitle:   'REST vs GraphQL vs gRPC, versioning, idempotency, pagination, rate limiting',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['api', 'design'],
              file:       'api-design.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Infrastructure',
          concepts: [
            {
              title:      'Load Balancing',
              subtitle:   'Round robin, least connections, consistent hashing, sticky sessions, health checks',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['load-balancing', 'infrastructure'],
              file:       'load-balancing.html',
              status:     'placeholder'
            },
            {
              title:      'Caching Strategies',
              subtitle:   'Cache-aside, write-through, write-behind, Redis patterns, cache invalidation',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['caching', 'redis'],
              file:       'caching.html',
              status:     'placeholder'
            },
            {
              title:      'CDN & Edge Computing',
              subtitle:   'Content delivery, edge caching, origin servers, cache-control headers',
              difficulty: 'intermediate',
              time:       '20 min',
              tags:       ['cdn', 'infrastructure'],
              file:       'cdn.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Data at Scale',
          concepts: [
            {
              title:      'Database Sharding',
              subtitle:   'Horizontal partitioning, shard key selection, hot spots, resharding challenges',
              difficulty: 'advanced',
              time:       '45 min',
              tags:       ['sharding', 'database'],
              file:       'sharding.html',
              status:     'placeholder'
            },
            {
              title:      'NoSQL vs SQL at Scale',
              subtitle:   'When to use NoSQL, document/column/graph/time-series databases, polyglot persistence',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['nosql', 'database'],
              file:       'nosql-vs-sql.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Messaging & Events',
          concepts: [
            {
              title:      'Message Queues & Kafka',
              subtitle:   'Pub/sub, at-least-once delivery, Kafka architecture, partitions, consumer groups',
              difficulty: 'advanced',
              time:       '1 hr',
              tags:       ['messaging', 'kafka'],
              file:       'message-queues.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Case Studies',
          concepts: [
            {
              title:      'Design a URL Shortener',
              subtitle:   'End-to-end: encoding strategy, storage, redirects, analytics, scale to billions',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['case-study'],
              file:       'url-shortener.html',
              status:     'placeholder',
              isNew:      true
            },
            {
              title:      'Design Twitter Feed',
              subtitle:   'Fan-out on write vs read, timeline generation, celebrities problem, at-scale caching',
              difficulty: 'advanced',
              time:       '1 hr',
              tags:       ['case-study'],
              file:       'twitter-feed.html',
              status:     'placeholder'
            },
            {
              title:      'Design a Notification System',
              subtitle:   'Multi-channel delivery, priority queues, deduplication, at-least-once guarantees',
              difficulty: 'advanced',
              time:       '45 min',
              tags:       ['case-study'],
              file:       'notification-system.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Reference',
          concepts: [
            {
              title:      'System Design Study Plan',
              subtitle:   'Pomodoro-based path to complete the module',
              difficulty: 'beginner',
              time:       '15 min',
              tags:       ['plan', 'schedule', 'study'],
              file:       'study-plan.html',
              status:     'available',
              featured:   true
            }
          ]
        }
      ]
    },

    /* ════════════════════════════════════ JAVASCRIPT */
    {
      id:            'javascript',
      title:         'JavaScript',
      description:   'Deep dive into JavaScript fundamentals — closures, prototypes, async patterns, the event loop, and modern ES6+ features.',
      icon:          '⚡',
      accentColor:   '#fbbf24',
      accentClass:   'yellow',
      estimatedTime: '4 hrs',
      difficulty:    'intermediate',
      tags:          ['frontend', 'scripting', 'async'],
      path:          'javascript/',
      isNew:         false,
      groups: [
        {
          name: 'Core Language',
          concepts: [
            {
              title:      'Closures & Scope',
              subtitle:   'Lexical scope, closure use cases, module pattern, IIFE, common pitfalls',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['closures', 'scope'],
              file:       'closures.html',
              status:     'placeholder',
              featured:   true
            },
            {
              title:      'Prototypes & Inheritance',
              subtitle:   'Prototype chain, Object.create, class syntax sugar, mixins, composition',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['prototypes', 'oop'],
              file:       'prototypes.html',
              status:     'placeholder'
            },
            {
              title:      'this Keyword',
              subtitle:   'Binding rules — implicit, explicit, new, arrow functions, common pitfalls',
              difficulty: 'intermediate',
              time:       '25 min',
              tags:       ['this', 'context'],
              file:       'this-keyword.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Async JavaScript',
          concepts: [
            {
              title:      'Event Loop',
              subtitle:   'Call stack, task queue, microtask queue, macrotasks, rendering pipeline',
              difficulty: 'advanced',
              time:       '30 min',
              tags:       ['event-loop', 'async'],
              file:       'event-loop.html',
              status:     'placeholder'
            },
            {
              title:      'Promises & async/await',
              subtitle:   'Promise chaining, error handling, Promise.all/race/allSettled, async iteration',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['promises', 'async'],
              file:       'promises-async-await.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Modern JavaScript',
          concepts: [
            {
              title:      'JS Fundamentals Guide',
              subtitle:   'Comprehensive JavaScript fundamentals reference covering core concepts',
              difficulty: 'beginner',
              time:       '45 min',
              tags:       ['fundamentals', 'reference'],
              file:       'js-fundamentals-guide.html',
              status:     'available'
            },
            {
              title:      'ES6+ Features',
              subtitle:   'Destructuring, spread/rest, optional chaining, nullish coalescing, WeakMap',
              difficulty: 'beginner',
              time:       '30 min',
              tags:       ['es6', 'modern'],
              file:       'es6-features.html',
              status:     'placeholder'
            },
            {
              title:      'Modules & Bundling',
              subtitle:   'ES modules, CommonJS, tree shaking, dynamic imports, circular dependencies',
              difficulty: 'intermediate',
              time:       '25 min',
              tags:       ['modules', 'bundling'],
              file:       'modules.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Reference',
          concepts: [
            {
              title:      'JavaScript Study Plan',
              subtitle:   'Pomodoro-based path to complete the module',
              difficulty: 'beginner',
              time:       '15 min',
              tags:       ['plan', 'schedule', 'study'],
              file:       'study-plan.html',
              status:     'available',
              featured:   true
            }
          ]
        }
      ]
    },

    /* ════════════════════════════════════ REACT */
    {
      id:            'react',
      title:         'React / Next.js',
      description:   'Build modern React apps with hooks, advanced patterns, state management, and Next.js App Router for server-side and static rendering.',
      icon:          '⚛️',
      accentColor:   '#38bdf8',
      accentClass:   'sky',
      estimatedTime: '5 hrs',
      difficulty:    'intermediate',
      tags:          ['frontend', 'ui', 'framework'],
      path:          'react/',
      isNew:         false,
      groups: [
        {
          name: 'Hooks',
          concepts: [
            {
              title:      'useState & useEffect',
              subtitle:   'State management, effect lifecycle, cleanup functions, dependency arrays',
              difficulty: 'beginner',
              time:       '30 min',
              tags:       ['hooks', 'state'],
              file:       'use-state-effect.html',
              status:     'placeholder',
              featured:   true
            },
            {
              title:      'useContext & useReducer',
              subtitle:   'Context API, reducer pattern, when to use vs Redux or Zustand',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['hooks', 'context'],
              file:       'use-context-reducer.html',
              status:     'placeholder'
            },
            {
              title:      'useMemo & useCallback',
              subtitle:   'Memoization, referential equality, when to optimize and when not to',
              difficulty: 'intermediate',
              time:       '20 min',
              tags:       ['hooks', 'performance'],
              file:       'use-memo-callback.html',
              status:     'placeholder'
            },
            {
              title:      'Custom Hooks',
              subtitle:   'Extracting logic, composition patterns, real-world hook examples',
              difficulty: 'intermediate',
              time:       '25 min',
              tags:       ['hooks', 'patterns'],
              file:       'custom-hooks.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Rendering & Performance',
          concepts: [
            {
              title:      'Virtual DOM & Reconciliation',
              subtitle:   'Diffing algorithm, fiber architecture, keys, batching updates',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['rendering', 'vdom'],
              file:       'reconciliation.html',
              status:     'placeholder'
            },
            {
              title:      'React Server Components',
              subtitle:   'RSC vs Client Components, data fetching patterns, streaming with Suspense',
              difficulty: 'advanced',
              time:       '45 min',
              tags:       ['rsc', 'next.js', 'rendering'],
              file:       'server-components.html',
              status:     'placeholder',
              isNew:      true
            }
          ]
        },
        {
          name: 'Next.js',
          concepts: [
            {
              title:      'App Router & File Conventions',
              subtitle:   'Layouts, loading states, error boundaries, route groups, parallel routes',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['next.js', 'routing'],
              file:       'app-router.html',
              status:     'placeholder'
            },
            {
              title:      'SSR vs SSG vs ISR',
              subtitle:   'Rendering strategies, when to use each, generateStaticParams, revalidation',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['next.js', 'rendering'],
              file:       'rendering-strategies.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Reference',
          concepts: [
            {
              title:      'React / Next.js Study Plan',
              subtitle:   'Pomodoro-based path to complete the module',
              difficulty: 'beginner',
              time:       '15 min',
              tags:       ['plan', 'schedule', 'study'],
              file:       'study-plan.html',
              status:     'available',
              featured:   true
            }
          ]
        }
      ]
    },

    /* ════════════════════════════════════ CLOUD */
    {
      id:            'cloud',
      title:         'Cloud & DevOps',
      description:   'Containers, orchestration, CI/CD pipelines, and core AWS services — the infrastructure knowledge every backend engineer needs.',
      icon:          '☁️',
      accentColor:   '#3b82f6',
      accentClass:   'blue',
      estimatedTime: '5 hrs',
      difficulty:    'intermediate',
      tags:          ['devops', 'cloud', 'infrastructure'],
      path:          'cloud/',
      isNew:         false,
      groups: [
        {
          name: 'Containers',
          concepts: [
            {
              title:      'Docker Fundamentals',
              subtitle:   'Images, containers, Dockerfile best practices, layers, volumes, networking',
              difficulty: 'beginner',
              time:       '45 min',
              tags:       ['docker', 'containers'],
              file:       'docker.html',
              status:     'available',
              featured:   true
            },
            {
              title:      'Docker Compose',
              subtitle:   'Multi-container apps, networking, service dependencies, override files',
              difficulty: 'beginner',
              time:       '30 min',
              tags:       ['docker', 'compose'],
              file:       'docker-compose.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Kubernetes',
          concepts: [
            {
              title:      'Kubernetes Architecture',
              subtitle:   'Nodes, pods, deployments, services, ingress, ConfigMaps, Secrets',
              difficulty: 'intermediate',
              time:       '1 hr',
              tags:       ['kubernetes', 'orchestration'],
              file:       'kubernetes.html',
              status:     'available'
            },
            {
              title:      'K8s Deployments & Scaling',
              subtitle:   'Rolling updates, HPA, resource requests/limits, health probes, PodDisruptionBudgets',
              difficulty: 'advanced',
              time:       '45 min',
              tags:       ['kubernetes', 'scaling'],
              file:       'k8s-deployments.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'CI/CD',
          concepts: [
            {
              title:      'GitHub Actions',
              subtitle:   'Workflows, jobs, matrix builds, secrets, artifacts, composite actions',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['ci-cd', 'github'],
              file:       'github-actions.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'AWS Modules 1–11',
          concepts: [
            {
              title:      'Module 1 — AWS & Cloud Foundations',
              subtitle:   'Cloud value proposition, regions and AZs, service models, AWS account model',
              difficulty: 'beginner',
              time:       '45 min',
              tags:       ['aws', 'cloud', 'Guruji'],
              file:       'aws-foundation.html',
              status:     'available',
              featured:   true
            },
            {
              title:      'Module 2 — IAM Deep Dive',
              subtitle:   'Users, groups, roles, policies, trust relationships, permission evaluation',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['aws', 'iam', 'security', 'Guruji'],
              file:       'aws-iam.html',
              status:     'available'
            },
            {
              title:      'Module 3 — VPC & Networking',
              subtitle:   'Subnets, route tables, internet gateways, NAT, security groups, NACLs',
              difficulty: 'intermediate',
              time:       '1 hr',
              tags:       ['aws', 'networking', 'vpc', 'Guruji'],
              file:       'aws-vpc.html',
              status:     'available'
            },
            {
              title:      'Module 4 — AWS Compute Deep Dive',
              subtitle:   'EC2 instances, AMIs, launch templates, auto scaling, load balancing',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['aws', 'compute', 'ec2', 'Guruji'],
              file:       'aws-compute.html',
              status:     'available'
            },
            {
              title:      'Module 4.5 — Containers & Scaling on AWS',
              subtitle:   'Docker, ECS, EKS, orchestration choices, scaling trade-offs, deployment patterns',
              difficulty: 'intermediate',
              time:       '1 hr',
              tags:       ['aws', 'containers', 'scaling', 'Guruji'],
              file:       'aws-containers-scaling.html',
              status:     'available'
            },
            {
              title:      'Module 5 — AWS Storage Deep Dive',
              subtitle:   'S3, EBS, EFS, consistency, durability, lifecycle policies, access patterns',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['aws', 'storage', 's3', 'Guruji'],
              file:       'aws-storage.html',
              status:     'available'
            },
            {
              title:      'Module 6 — AWS Databases Deep Dive',
              subtitle:   'RDS, DynamoDB, OLTP vs OLAP, managed database trade-offs',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['aws', 'databases', 'rds', 'Guruji'],
              file:       'aws-databases.html',
              status:     'available'
            },
            {
              title:      'Module 7 — AWS Messaging & Eventing',
              subtitle:   'SQS, SNS, event-driven patterns, retries, fan-out, decoupling services',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['aws', 'messaging', 'eventing', 'Guruji'],
              file:       'aws-messaging.html',
              status:     'available'
            },
            {
              title:      'Module 8 — API Gateway',
              subtitle:   'REST, HTTP, and WebSocket APIs, integrations, routing, request transforms',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['aws', 'apigateway', 'serverless', 'Guruji'],
              file:       'aws_module8_apigateway.html',
              status:     'available'
            },
            {
              title:      'Module 9 — Security',
              subtitle:   'Shared responsibility, encryption, KMS, envelope encryption, service-level security',
              difficulty: 'advanced',
              time:       '1 hr',
              tags:       ['aws', 'security', 'kms', 'Guruji'],
              file:       'aws_module9_security.html',
              status:     'available'
            },
            {
              title:      'Module 10 — Observability',
              subtitle:   'Metrics, alarms, dashboards, logs, tracing, production troubleshooting',
              difficulty: 'advanced',
              time:       '1 hr',
              tags:       ['aws', 'observability', 'cloudwatch', 'Guruji'],
              file:       'aws_module10_observability.html',
              status:     'available'
            },
            {
              title:      'Module 11 — Infrastructure as Code',
              subtitle:   'CloudFormation, templates, stacks, change sets, drift detection, parameters',
              difficulty: 'advanced',
              time:       '1 hr',
              tags:       ['aws', 'iac', 'cloudformation', 'Guruji'],
              file:       'aws_module11_iac.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'AWS Quick Reference',
          concepts: [
            {
              title:      'EC2, S3 & IAM',
              subtitle:   'Core compute, object storage, access control, instance profiles, policies',
              difficulty: 'beginner',
              time:       '45 min',
              tags:       ['aws', 'cloud', 'Guruji'],
              file:       'aws-basics.html',
              status:     'available'
            },
            {
              title:      'Lambda & Serverless',
              subtitle:   'Function lifecycle, triggers, cold starts, layers, event-driven patterns',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['aws', 'lambda', 'serverless', 'Guruji'],
              file:       'lambda.html',
              status:     'available'
            },
            {
              title:      'Cloud Interview Reference Sheet',
              subtitle:   'AWS, Docker, Kubernetes, CI/CD — comprehensive cloud interview cheatsheet',
              difficulty: 'intermediate',
              time:       '45 min',
              tags:       ['reference', 'interview', 'Guruji'],
              file:       'cloud_interview_reference_sheet.html',
              status:     'available'
            }
          ]
        },
        {
          name: 'Reference',
          concepts: [
            {
              title:      'Cloud & DevOps Study Plan',
              subtitle:   'Pomodoro-based path to complete the module',
              difficulty: 'beginner',
              time:       '15 min',
              tags:       ['plan', 'schedule', 'study'],
              file:       'study-plan.html',
              status:     'available',
              featured:   true
            }
          ]
        }
      ]
    },

    /* ════════════════════════════════════ BEHAVIORAL */
    {
      id:            'behavioral',
      title:         'Behavioral',
      description:   'Structure compelling stories using STAR method. Master leadership, conflict, failure, ownership, and collaboration scenarios.',
      icon:          '🎯',
      accentColor:   '#ec4899',
      accentClass:   'pink',
      estimatedTime: '3 hrs',
      difficulty:    'beginner',
      tags:          ['soft-skills', 'interview', 'leadership'],
      path:          'behavioral/',
      isNew:         false,
      groups: [
        {
          name: 'Core Framework',
          concepts: [
            {
              title:      'STAR Method Guide',
              subtitle:   'Situation, Task, Action, Result — structuring answers that land',
              difficulty: 'beginner',
              time:       '15 min',
              tags:       ['star', 'framework'],
              file:       'star-method.html',
              status:     'placeholder',
              featured:   true
            },
            {
              title:      'Tell Me About Yourself',
              subtitle:   'Crafting a 90-second professional narrative with impact',
              difficulty: 'beginner',
              time:       '20 min',
              tags:       ['intro', 'narrative'],
              file:       'about-yourself.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Leadership & Ownership',
          concepts: [
            {
              title:      'Leadership Stories',
              subtitle:   'Taking initiative, influencing without authority, driving decisions without a title',
              difficulty: 'intermediate',
              time:       '30 min',
              tags:       ['leadership', 'ownership'],
              file:       'leadership.html',
              status:     'placeholder'
            },
            {
              title:      'Ownership & Accountability',
              subtitle:   'Going beyond scope, end-to-end responsibility, proactive communication',
              difficulty: 'beginner',
              time:       '20 min',
              tags:       ['ownership', 'accountability'],
              file:       'ownership.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Conflict & Growth',
          concepts: [
            {
              title:      'Conflict Resolution',
              subtitle:   'Disagreeing with managers, cross-team friction, resolving productively',
              difficulty: 'intermediate',
              time:       '25 min',
              tags:       ['conflict', 'communication'],
              file:       'conflict.html',
              status:     'placeholder'
            },
            {
              title:      'Failure & Growth Mindset',
              subtitle:   'Owning mistakes, demonstrating what you learned, showing resilience',
              difficulty: 'intermediate',
              time:       '20 min',
              tags:       ['failure', 'growth'],
              file:       'failure.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Technical Decisions',
          concepts: [
            {
              title:      'Technical Decision Making',
              subtitle:   'Trade-off analysis stories, migration decisions, tech debt vs features',
              difficulty: 'intermediate',
              time:       '25 min',
              tags:       ['decisions', 'technical'],
              file:       'tech-decisions.html',
              status:     'placeholder'
            }
          ]
        },
        {
          name: 'Reference',
          concepts: [
            {
              title:      'Behavioral Study Plan',
              subtitle:   'Pomodoro-based path to complete the module',
              difficulty: 'beginner',
              time:       '15 min',
              tags:       ['plan', 'schedule', 'study'],
              file:       'study-plan.html',
              status:     'available',
              featured:   true
            }
          ]
        }
]
    }

  ] // end topics
}; // end SITE_DATA

/* ── Helper Functions ───────────────────────────────────────── */

function getTopicById(id) {
  return SITE_DATA.topics.find(t => t.id === id) || null;
}

function getTotalConcepts() {
  return SITE_DATA.topics.reduce((total, topic) =>
    total + topic.groups.reduce((g, group) => g + group.concepts.length, 0), 0);
}

function getAvailableConcepts() {
  return SITE_DATA.topics.reduce((total, topic) =>
    total + topic.groups.reduce((g, group) =>
      g + group.concepts.filter(c => c.status === 'available').length, 0), 0);
}
