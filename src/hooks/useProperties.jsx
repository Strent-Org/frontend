// src/hooks/useProperties.js
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

/**
 * Custom hook to fetch properties data from API.
 * @param {string} endpoint - API endpoint (e.g. "/api/properties/-latest")
 * @param {object} params - Query parameters (filters, pagination, etc.)
 */
export default function useProperties(endpoint, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(endpoint, { params });
      setData(response.data);
    } catch (err) {
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  }, [endpoint, params]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData();

    return () => controller.abort();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
